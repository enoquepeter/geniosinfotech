<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class DeployCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'deploy:prepare';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Prepare application for production deployment';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('🚀 Preparando aplicação para produção...');
        $this->line('');

        // Verificar ambiente
        if (app()->environment('production')) {
            $this->warn('⚠️  Você está em ambiente de produção!');
            if (!$this->confirm('Continuar mesmo assim?')) {
                $this->info('❌ Operação cancelada.');
                return;
            }
        }

        try {
            // Cache de configuração
            $this->info('📝 Cache de configuração...');
            Artisan::call('config:cache');
            $this->info('✅ Configuração em cache');

            // Cache de rotas
            $this->info('🛣️  Cache de rotas...');
            Artisan::call('route:cache');
            $this->info('✅ Rotas em cache');

            // Cache de views
            $this->info('👁️  Cache de views...');
            Artisan::call('view:cache');
            $this->info('✅ Views em cache');

            // Otimizar autoloader
            $this->info('⚡ Otimizando autoloader...');
            Artisan::call('optimize');
            $this->info('✅ Autoloader otimizado');

            // Verificar migrações pendentes
            $this->info('🗄️  Verificando migrações...');
            Artisan::call('migrate:status');
            $this->info('✅ Status das migrações verificado');

            // Limpar logs antigos
            $this->info('🧹 Limpando logs antigos...');
            $logPath = storage_path('logs/laravel.log');
            if (file_exists($logPath) && filesize($logPath) > 10 * 1024 * 1024) { // 10MB
                file_put_contents($logPath, '');
                $this->info('✅ Logs limpos');
            } else {
                $this->info('ℹ️  Logs não precisam ser limpos');
            }

            $this->line('');
            $this->info('🎉 Aplicação preparada para produção!');
            $this->line('');
            $this->info('📋 Próximos passos:');
            $this->line('1. Fazer backup do banco de dados');
            $this->line('2. Executar migrações: php artisan migrate --force');
            $this->line('3. Verificar permissões dos diretórios storage/');
            $this->line('4. Configurar SSL/HTTPS');
            $this->line('5. Testar funcionalidades críticas');

        } catch (\Exception $e) {
            $this->error('❌ Erro durante a preparação: ' . $e->getMessage());
            $this->line('');
            $this->info('🔧 Soluções possíveis:');
            $this->line('1. Verifique as configurações do banco de dados');
            $this->line('2. Execute: php artisan config:clear');
            $this->line('3. Execute: php artisan cache:clear');
            $this->line('4. Verifique permissões dos diretórios');
        }
    }
}
