<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;
use PDO;

class ForceMySQL extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:force-mysql';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Force MySQL configuration and create database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('🗄️ Forçando configuração MySQL...');
        $this->line('');

        // Forçar configuração MySQL
        config([
            'database.default' => 'mysql',
            'database.connections.mysql' => [
                'driver' => 'mysql',
                'host' => '127.0.0.1',
                'port' => '3306',
                'database' => null, // Sem banco específico primeiro
                'username' => 'root',
                'password' => '',
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_unicode_ci',
            ]
        ]);

        try {
            // Conectar sem banco específico
            $this->info('🔍 Conectando ao MySQL...');
            $pdo = new PDO('mysql:host=127.0.0.1;port=3306', 'root', '');
            $this->info('✅ Conexão MySQL estabelecida');
            
            // Criar banco de dados
            $databaseName = 'geniosinfotech';
            $this->info("📊 Criando banco de dados: {$databaseName}");
            
            $pdo->exec("CREATE DATABASE IF NOT EXISTS {$databaseName} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
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
            $this->info('🎉 MySQL configurado com sucesso!');
            $this->line('');
            $this->info('📝 Para persistir a configuração, adicione ao .env:');
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
            $this->line('1. MySQL está rodando no Laragon');
            $this->line('2. Usuário root tem permissões');
            $this->line('3. Porta 3306 está disponível');
        }
    }
}
