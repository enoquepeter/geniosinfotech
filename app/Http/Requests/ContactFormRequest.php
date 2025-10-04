<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telefone' => 'required|string|max:20',
            'empresa' => 'nullable|string|max:255',
            'servico' => 'required|string|max:255',
            'mensagem' => 'required|string|max:2000'
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nome.required' => 'O nome é obrigatório.',
            'nome.string' => 'O nome deve ser um texto.',
            'nome.max' => 'O nome não pode ter mais de 255 caracteres.',
            'email.required' => 'O email é obrigatório.',
            'email.email' => 'O email deve ter um formato válido.',
            'email.max' => 'O email não pode ter mais de 255 caracteres.',
            'telefone.required' => 'O telefone é obrigatório.',
            'telefone.string' => 'O telefone deve ser um texto.',
            'telefone.max' => 'O telefone não pode ter mais de 20 caracteres.',
            'empresa.string' => 'A empresa deve ser um texto.',
            'empresa.max' => 'A empresa não pode ter mais de 255 caracteres.',
            'servico.required' => 'O serviço é obrigatório.',
            'servico.string' => 'O serviço deve ser um texto.',
            'servico.max' => 'O serviço não pode ter mais de 255 caracteres.',
            'mensagem.required' => 'A mensagem é obrigatória.',
            'mensagem.string' => 'A mensagem deve ser um texto.',
            'mensagem.max' => 'A mensagem não pode ter mais de 2000 caracteres.'
        ];
    }
}
