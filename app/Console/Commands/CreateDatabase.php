<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

class CreateDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create MySQL database and configure connection';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('🗄️ Criando banco de dados MySQL...');
        $this->line('');

        // Configurar conexão temporária sem banco específico
        config(['database.connections.mysql.database' => null]);
        
        try {
            // Conectar sem banco específico
            DB::purge('mysql');
            DB::connection('mysql')->getPdo();
            $this->info('✅ Conexão MySQL estabelecida');
            
            // Criar banco de dados
            $databaseName = 'geniosinfotech';
            $this->info("📊 Criando banco de dados: {$databaseName}");
            
            DB::statement("CREATE DATABASE IF NOT EXISTS {$databaseName} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
            $this->info("✅ Banco de dados '{$databaseName}' criado com sucesso");
            
            // Configurar para usar o banco criado
            config(['database.connections.mysql.database' => $databaseName]);
            DB::purge('mysql');
            
            // Testar conexão com o banco específico
            DB::connection('mysql')->getPdo();
            $this->info("✅ Conexão com banco '{$databaseName}' estabelecida");
            
            $this->line('');
            
            // Executar migrações
            $this->info('🚀 Executando migrações...');
            Artisan::call('migrate:fresh', ['--force' => true]);
            $this->info('✅ Migrações executadas com sucesso');
            
            $this->line('');
            
            // Verificar tabelas
            $this->info('📋 Verificando tabelas criadas...');
            $tables = DB::select('SHOW TABLES');
            $this->info('✅ Tabelas encontradas:');
            foreach ($tables as $table) {
                $tableName = array_values((array)$table)[0];
                $this->line("   - {$tableName}");
            }
            
            $this->line('');
            $this->info('🎉 Banco de dados MySQL configurado com sucesso!');
            $this->line('');
            $this->info('📝 IMPORTANTE: Adicione estas configurações ao seu arquivo .env:');
            $this->line('DB_CONNECTION=mysql');
            $this->line('DB_HOST=127.0.0.1');
            $this->line('DB_PORT=3306');
            $this->line('DB_DATABASE=geniosinfotech');
            $this->line('DB_USERNAME=root');
            $this->line('DB_PASSWORD=');
            
        } catch (\Exception $e) {
            $this->error('❌ Erro: ' . $e->getMessage());
            $this->line('');
            $this->info('🔧 Verifique se:');
            $this->line('1. MySQL está rodando');
            $this->line('2. Usuário root tem permissões');
            $this->line('3. Porta 3306 está disponível');
        }
    }
}
