<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test email configuration';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Testing email configuration...');
        
        try {
            Mail::raw('Este é um teste de email do sistema Genios Infotech.', function ($message) {
                $message->to('geniosinfotech@gmail.com')
                        ->subject('Teste de Email - Genios Infotech');
            });
            
            $this->info('✅ Email enviado com sucesso!');
            $this->info('Verifique sua caixa de entrada em geniosinfotech@gmail.com');
            
        } catch (\Exception $e) {
            $this->error('❌ Erro ao enviar email: ' . $e->getMessage());
            $this->error('Verifique as configurações de email no arquivo .env');
        }
    }
}
