<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsletterRequest;
use App\Models\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NewsletterController extends Controller
{
    public function subscribe(NewsletterRequest $request)
    {
        Log::info('Newsletter subscription request received', [
            'email' => $request->email,
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent()
        ]);

        try {
            $newsletter = Newsletter::create([
                'email' => $request->email,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'is_active' => true,
                'subscribed_at' => now()
            ]);

            Log::info('Newsletter subscription successful', [
                'newsletter_id' => $newsletter->id,
                'email' => $newsletter->email
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Obrigado por subscrever a nossa newsletter!'
            ], 200);

        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::warning('Newsletter subscription validation failed', [
                'errors' => $e->errors(),
                'email' => $request->email
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Dados inválidos. Verifique o email e tente novamente.',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            Log::error('Newsletter subscription error', [
                'message' => $e->getMessage(),
                'email' => $request->email,
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Erro interno do servidor. Tente novamente mais tarde.'
            ], 500);
        }
    }

    public function unsubscribe(Request $request, $email)
    {
        try {
            $newsletter = Newsletter::where('email', $email)->first();
            
            if (!$newsletter) {
                return response()->json([
                    'success' => false,
                    'message' => 'Email não encontrado na nossa base de dados.'
                ], 404);
            }

            $newsletter->unsubscribe();

            Log::info('Newsletter unsubscription successful', [
                'newsletter_id' => $newsletter->id,
                'email' => $newsletter->email
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Foi removido da nossa newsletter com sucesso.'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Newsletter unsubscription error', [
                'message' => $e->getMessage(),
                'email' => $email,
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Erro interno do servidor. Tente novamente mais tarde.'
            ], 500);
        }
    }
}
