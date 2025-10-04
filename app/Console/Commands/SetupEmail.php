<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class SetupEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'setup:email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup email configuration';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('🔧 Configurando Email para Genios Infotech...');
        
        // Verificar se .env existe
        if (!File::exists('.env')) {
            $this->error('❌ Arquivo .env não encontrado!');
            $this->info('Crie um arquivo .env baseado no .env.example');
            return;
        }
        
        $this->info('📧 Configurações necessárias:');
        $this->line('');
        $this->line('1. MAIL_MAILER=smtp');
        $this->line('2. MAIL_HOST=smtp.gmail.com');
        $this->line('3. MAIL_PORT=587');
        $this->line('4. MAIL_USERNAME=geniosinfotech@gmail.com');
        $this->line('5. MAIL_PASSWORD=sua-senha-de-aplicativo');
        $this->line('6. MAIL_ENCRYPTION=tls');
        $this->line('7. MAIL_FROM_ADDRESS=geniosinfotech@gmail.com');
        $this->line('8. MAIL_FROM_NAME="Genios Infotech"');
        $this->line('');
        
        $this->info('🔑 Para Gmail:');
        $this->line('1. Ative autenticação de 2 fatores');
        $this->line('2. Gere uma "Senha de App"');
        $this->line('3. Use essa senha no MAIL_PASSWORD');
        $this->line('');
        
        $this->info('🧪 Para testar após configurar:');
        $this->line('php artisan test:email');
        $this->line('');
        
        $this->info('📋 Verifique o arquivo CONFIGURACAO_EMAIL.md para instruções detalhadas');
    }
}
