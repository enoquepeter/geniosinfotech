<?php

namespace App\Console\Commands;

use App\Models\Newsletter;
use Illuminate\Console\Command;

class ListNewsletters extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'newsletter:list {--limit=10 : Number of newsletters to show} {--active : Show only active subscriptions}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List newsletter subscriptions';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $limit = $this->option('limit');
        $activeOnly = $this->option('active');

        $query = Newsletter::latest();

        if ($activeOnly) {
            $query->active();
        }

        $newsletters = $query->limit($limit)->get();

        if ($newsletters->isEmpty()) {
            $this->info('📭 Nenhuma inscrição na newsletter encontrada.');
            return;
        }

        $this->info("📧 Últimas {$limit} inscrições na newsletter:");
        $this->line('');

        foreach ($newsletters as $newsletter) {
            $status = $newsletter->is_active ? '✅' : '❌';
            $this->line("ID: {$newsletter->id} | {$status} | {$newsletter->email}");
            $this->line("   Inscrito em: {$newsletter->subscribed_at->format('d/m/Y H:i')}");
            if (!$newsletter->is_active && $newsletter->unsubscribed_at) {
                $this->line("   Desinscrito em: {$newsletter->unsubscribed_at->format('d/m/Y H:i')}");
            }
            $this->line('');
        }

        $total = Newsletter::count();
        $active = Newsletter::active()->count();
        $inactive = Newsletter::where('is_active', false)->count();

        $this->info("📊 Estatísticas da Newsletter:");
        $this->line("   Total de inscrições: {$total}");
        $this->line("   Inscrições ativas: {$active}");
        $this->line("   Inscrições inativas: {$inactive}");
    }
}
