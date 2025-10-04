<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactFormMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(ContactFormRequest $request)
    {
        Log::info('Contact form request received', [
            'method' => $request->method(),
            'url' => $request->url(),
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'data' => $request->validated()
        ]);

        try {
            $validated = $request->validated();

            // Save to database
            $contact = Contact::create([
                'nome' => $validated['nome'],
                'email' => $validated['email'],
                'telefone' => $validated['telefone'],
                'empresa' => $validated['empresa'] ?? null,
                'servico' => $validated['servico'],
                'mensagem' => $validated['mensagem'],
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'email_sent' => false,
                'email_sent_at' => null
            ]);

            Log::info('Contact form saved to database', [
                'contact_id' => $contact->id,
                'email' => $validated['email'],
                'nome' => $validated['nome']
            ]);

            // Send email notification
            $emailSent = false;
            try {
                Mail::to('geniosinfotech@gmail.com')
                    ->send(new ContactFormMail($validated));
                
                $emailSent = true;
                $contact->update([
                    'email_sent' => true,
                    'email_sent_at' => now()
                ]);
                
                Log::info('Contact form email sent successfully', [
                    'contact_id' => $contact->id,
                    'email' => $validated['email'],
                    'nome' => $validated['nome']
                ]);
            } catch (\Exception $mailException) {
                Log::error('Failed to send contact form email', [
                    'contact_id' => $contact->id,
                    'error' => $mailException->getMessage(),
                    'data' => $validated
                ]);
                
                // Don't fail the request if email fails, just log it
            }

            Log::info('Contact form processed successfully', [
                'contact_id' => $contact->id,
                'email_sent' => $emailSent,
                'data' => $validated
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Mensagem enviada com sucesso! Entraremos em contacto em breve.'
            ], 200);

        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::warning('Contact form validation failed', [
                'errors' => $e->errors(),
                'data' => $request->all()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Dados inválidos. Verifique os campos e tente novamente.',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            Log::error('Contact form error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'data' => $request->all()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Erro interno do servidor. Tente novamente mais tarde.'
            ], 500);
        }
    }
}