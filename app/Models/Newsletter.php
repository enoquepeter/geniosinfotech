<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Newsletter extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'ip_address',
        'user_agent',
        'is_active',
        'subscribed_at',
        'unsubscribed_at'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'subscribed_at' => 'datetime',
        'unsubscribed_at' => 'datetime',
    ];

    /**
     * Scope para filtrar inscrições ativas
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope para filtrar por data de inscrição
     */
    public function scopeByDate($query, $date)
    {
        return $query->whereDate('subscribed_at', $date);
    }

    /**
     * Marcar como desinscrito
     */
    public function unsubscribe()
    {
        $this->update([
            'is_active' => false,
            'unsubscribed_at' => now()
        ]);
    }

    /**
     * Reativar inscrição
     */
    public function resubscribe()
    {
        $this->update([
            'is_active' => true,
            'unsubscribed_at' => null
        ]);
    }
}
