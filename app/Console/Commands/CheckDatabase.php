<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CheckDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check database configuration and tables';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('🔍 Verificando configuração do banco de dados...');
        $this->line('');

        // Verificar conexão
        $connection = config('database.default');
        $this->info("📊 Conexão padrão: {$connection}");

        if ($connection === 'sqlite') {
            $databasePath = config('database.connections.sqlite.database');
            $this->info("📁 Arquivo SQLite: {$databasePath}");
            
            if (file_exists($databasePath)) {
                $this->info("✅ Arquivo SQLite existe");
                $fileSize = filesize($databasePath);
                $this->info("📏 Tamanho do arquivo: " . number_format($fileSize) . " bytes");
            } else {
                $this->error("❌ Arquivo SQLite não encontrado!");
                return;
            }
        }

        $this->line('');

        // Listar tabelas
        try {
            if ($connection === 'sqlite') {
                $tables = DB::select("SELECT name FROM sqlite_master WHERE type='table'");
            } else {
                $tables = DB::select('SHOW TABLES');
            }
            
            if (empty($tables)) {
                $this->warn('⚠️  Nenhuma tabela encontrada no banco de dados');
                return;
            }

            $this->info('📋 Tabelas encontradas:');
            foreach ($tables as $table) {
                if ($connection === 'sqlite') {
                    $this->line("   - {$table->name}");
                } else {
                    $tableName = array_values((array)$table)[0];
                    $this->line("   - {$tableName}");
                }
            }

            $this->line('');

            // Verificar tabela contacts especificamente
            $tableNames = [];
            foreach ($tables as $table) {
                if ($connection === 'sqlite') {
                    $tableNames[] = $table->name;
                } else {
                    $tableNames[] = array_values((array)$table)[0];
                }
            }
            
            if (in_array('contacts', $tableNames)) {
                $this->info('✅ Tabela "contacts" encontrada');
                
                $contactCount = DB::table('contacts')->count();
                $this->info("📊 Total de contatos: {$contactCount}");
                
                if ($contactCount > 0) {
                    $recentContacts = DB::table('contacts')
                        ->orderBy('created_at', 'desc')
                        ->limit(3)
                        ->get();
                    
                    $this->line('');
                    $this->info('📝 Últimos contatos:');
                    foreach ($recentContacts as $contact) {
                        $emailStatus = $contact->email_sent ? '✅' : '❌';
                        $this->line("   ID: {$contact->id} | {$emailStatus} | {$contact->nome} ({$contact->email})");
                    }
                }
            } else {
                $this->warn('⚠️  Tabela "contacts" não encontrada');
            }

        } catch (\Exception $e) {
            $this->error('❌ Erro ao acessar banco de dados: ' . $e->getMessage());
        }
    }
}
