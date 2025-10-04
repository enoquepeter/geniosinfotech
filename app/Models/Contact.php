<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'empresa',
        'servico',
        'mensagem',
        'ip_address',
        'user_agent',
        'email_sent',
        'email_sent_at'
    ];

    protected $casts = [
        'email_sent' => 'boolean',
        'email_sent_at' => 'datetime',
    ];

    /**
     * Scope para filtrar contatos por status de email
     */
    public function scopeEmailSent($query, $sent = true)
    {
        return $query->where('email_sent', $sent);
    }

    /**
     * Scope para filtrar contatos por serviço
     */
    public function scopeByService($query, $service)
    {
        return $query->where('servico', $service);
    }

    /**
     * Scope para filtrar contatos por data
     */
    public function scopeByDate($query, $date)
    {
        return $query->whereDate('created_at', $date);
    }
}
