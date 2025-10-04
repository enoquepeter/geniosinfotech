<?php

namespace App\Console\Commands;

use App\Models\Contact;
use Illuminate\Console\Command;

class ListContacts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'contacts:list {--limit=10 : Number of contacts to show} {--service= : Filter by service}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List contact form submissions from database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $limit = $this->option('limit');
        $service = $this->option('service');

        $query = Contact::latest();

        if ($service) {
            $query->byService($service);
        }

        $contacts = $query->limit($limit)->get();

        if ($contacts->isEmpty()) {
            $this->info('📭 Nenhum contato encontrado no banco de dados.');
            return;
        }

        $this->info("📋 Últimos {$limit} contatos:");
        $this->line('');

        foreach ($contacts as $contact) {
            $emailStatus = $contact->email_sent ? '✅' : '❌';
            $this->line("ID: {$contact->id} | {$emailStatus} | {$contact->nome} ({$contact->email})");
            $this->line("   Serviço: {$contact->servico}");
            $this->line("   Data: {$contact->created_at->format('d/m/Y H:i')}");
            if ($contact->empresa) {
                $this->line("   Empresa: {$contact->empresa}");
            }
            $this->line("   Mensagem: " . substr($contact->mensagem, 0, 50) . "...");
            $this->line('');
        }

        $total = Contact::count();
        $sent = Contact::emailSent(true)->count();
        $notSent = Contact::emailSent(false)->count();

        $this->info("📊 Estatísticas:");
        $this->line("   Total de contatos: {$total}");
        $this->line("   Emails enviados: {$sent}");
        $this->line("   Emails não enviados: {$notSent}");
    }
}
