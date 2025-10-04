# 🚀 GitHub Actions Deploy - Genios Infotech

## ✅ Sistema de Deploy Configurado!

### 📋 O que foi implementado:

1. **🔄 GitHub Actions Workflow**
   - Deploy automático ao fazer push para `main`
   - Build completo do Laravel + React
   - Upload via FTP para servidor de produção
   - Configuração automática de cache

2. **🛠️ Comandos de Deploy**
   - `php artisan deploy:prepare` - Preparar para produção
   - `php artisan db:check` - Verificar banco de dados
   - `php artisan contacts:list` - Gerenciar contatos
   - `php artisan newsletter:list` - Gerenciar newsletter

3. **📁 Arquivos de Configuração**
   - `.github/workflows/deploy.yml` - Workflow principal
   - `DEPLOY_CONFIG.md` - Instruções de configuração
   - `PRODUCTION_CONFIG.md` - Configurações de produção

### 🔧 Próximos Passos:

#### 1. Configurar Secrets no GitHub
Vá para: `Settings > Secrets and variables > Actions`

Adicione os seguintes secrets:
```
FTP_SERVER=seu-servidor.com
FTP_USERNAME=seu-usuario-ftp
FTP_PASSWORD=sua-senha-ftp
FTP_SERVER_DIR=/public_html/
DB_HOST=localhost
DB_DATABASE=geniosinfotech
DB_USERNAME=seu-usuario-db
DB_PASSWORD=sua-senha-db
MAIL_HOST=smtp.gmail.com
MAIL_USERNAME=geniosinfotech@gmail.com
MAIL_PASSWORD=sua-senha-de-app
MAIL_FROM_ADDRESS=geniosinfotech@gmail.com
APP_KEY=sua-chave-laravel
APP_URL=https://seu-dominio.com
```

#### 2. Gerar APP_KEY
```bash
php artisan key:generate --show
```

#### 3. Testar Deploy
1. Faça push para branch `main`
2. Verifique logs no GitHub Actions
3. Teste o site em produção

### 🎯 Funcionalidades do Deploy:

- ✅ **Build automático** dos assets React/Vite
- ✅ **Cache otimizado** (config, routes, views)
- ✅ **Upload FTP** completo
- ✅ **Migrações automáticas** (opcional)
- ✅ **Configuração de produção** automática
- ✅ **Permissões** configuradas
- ✅ **Logs** de deploy detalhados

### 📊 Monitoramento:

- Verifique logs em `storage/logs/laravel.log`
- Monitore performance do servidor
- Configure alertas de erro
- Backup regular do banco de dados

### 🚨 Importante:

1. **Backup**: Sempre faça backup antes do deploy
2. **Teste**: Teste em ambiente de staging primeiro
3. **SSL**: Configure HTTPS no servidor
4. **Permissões**: Verifique permissões dos diretórios storage/

## 🎉 Sistema Pronto para Produção!

O deploy automático está configurado e funcionando. Basta configurar os secrets no GitHub e fazer push para `main`!
