<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

class SetupMySQL extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'setup:mysql';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup MySQL database configuration';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('🗄️ Configurando MySQL para Genios Infotech...');
        $this->line('');

        // Verificar se MySQL está rodando
        $this->info('🔍 Verificando MySQL...');
        try {
            DB::connection('mysql')->getPdo();
            $this->info('✅ MySQL está rodando e acessível');
        } catch (\Exception $e) {
            $this->error('❌ Erro ao conectar com MySQL: ' . $e->getMessage());
            $this->line('');
            $this->info('🔧 Soluções possíveis:');
            $this->line('1. Verifique se o MySQL está rodando');
            $this->line('2. Verifique as credenciais no arquivo .env');
            $this->line('3. Crie o banco de dados: CREATE DATABASE geniosinfotech;');
            return;
        }

        $this->line('');

        // Verificar se o banco existe
        $this->info('🔍 Verificando banco de dados...');
        try {
            $database = config('database.connections.mysql.database');
            $this->info("📊 Tentando acessar banco: {$database}");
            
            // Tentar criar o banco se não existir
            try {
                DB::statement("CREATE DATABASE IF NOT EXISTS {$database} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
                $this->info("✅ Banco de dados '{$database}' criado/verificado");
            } catch (\Exception $e) {
                $this->warn("⚠️  Não foi possível criar o banco: " . $e->getMessage());
            }

            // Testar conexão com o banco específico
            DB::connection('mysql')->getPdo();
            $this->info('✅ Conexão com banco estabelecida');
            
        } catch (\Exception $e) {
            $this->error('❌ Erro ao acessar banco: ' . $e->getMessage());
            return;
        }

        $this->line('');

        // Executar migrações
        $this->info('🚀 Executando migrações...');
        try {
            Artisan::call('migrate:fresh', ['--force' => true]);
            $this->info('✅ Migrações executadas com sucesso');
        } catch (\Exception $e) {
            $this->error('❌ Erro ao executar migrações: ' . $e->getMessage());
            return;
        }

        $this->line('');

        // Verificar tabelas
        $this->info('📋 Verificando tabelas criadas...');
        try {
            $tables = DB::select('SHOW TABLES');
            $this->info('✅ Tabelas encontradas:');
            foreach ($tables as $table) {
                $tableName = array_values((array)$table)[0];
                $this->line("   - {$tableName}");
            }
        } catch (\Exception $e) {
            $this->error('❌ Erro ao listar tabelas: ' . $e->getMessage());
        }

        $this->line('');
        $this->info('🎉 Configuração MySQL concluída!');
        $this->line('');
        $this->info('📊 Para verificar:');
        $this->line('php artisan db:check');
        $this->line('php artisan contacts:list');
    }
}
