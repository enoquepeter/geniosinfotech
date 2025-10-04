# 🚀 Configuração de Deploy - Genios Infotech

## 📋 Secrets necessários no GitHub

Configure os seguintes secrets no seu repositório GitHub (Settings > Secrets and variables > Actions):

### 🌐 Servidor FTP
```
FTP_SERVER=seu-servidor.com
FTP_USERNAME=seu-usuario-ftp
FTP_PASSWORD=sua-senha-ftp
FTP_SERVER_DIR=/public_html/
```

### 🗄️ Banco de Dados
```
DB_HOST=localhost
DB_DATABASE=geniosinfotech
DB_USERNAME=seu-usuario-db
DB_PASSWORD=sua-senha-db
```

### 📧 Email
```
MAIL_HOST=smtp.gmail.com
MAIL_USERNAME=geniosinfotech@gmail.com
MAIL_PASSWORD=sua-senha-de-app
MAIL_FROM_ADDRESS=geniosinfotech@gmail.com
```

### 🔑 Aplicação
```
APP_KEY=sua-chave-laravel-gerada
APP_URL=https://seu-dominio.com
```

### 🔧 SSH (Opcional - para comandos no servidor)
```
SSH_HOST=seu-servidor.com
SSH_USERNAME=seu-usuario-ssh
SSH_PRIVATE_KEY=sua-chave-privada-ssh
SSH_WORK_DIR=/caminho/para/site
```

## 🛠️ Comandos úteis

### Gerar APP_KEY
```bash
php artisan key:generate --show
```

### Testar conexão FTP
```bash
# Teste manual de upload
lftp -u usuario,senha ftp://servidor.com
```

### Verificar logs de deploy
```bash
# No GitHub Actions, verifique os logs do workflow
```

## 📁 Estrutura de arquivos no servidor

Após o deploy, o servidor deve ter:
```
/public_html/
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
├── routes/
├── storage/
├── vendor/
├── .env
├── artisan
└── composer.json
```

## ⚠️ Importante

1. **Backup**: Sempre faça backup antes do deploy
2. **Teste**: Teste em ambiente de staging primeiro
3. **Permissões**: Verifique permissões dos diretórios storage/
4. **SSL**: Configure HTTPS no servidor
5. **Migrações**: Descomente a seção de migrações se necessário

## 🔄 Processo de Deploy

1. Push para branch `main`
2. GitHub Actions executa automaticamente
3. Build dos assets (Vite/React)
4. Upload via FTP
5. Configuração no servidor
6. Cache otimizado
7. Migrações executadas (se habilitado)

## 📊 Monitoramento

- Verifique logs em `storage/logs/laravel.log`
- Monitore performance do servidor
- Configure alertas de erro
- Backup regular do banco de dados
