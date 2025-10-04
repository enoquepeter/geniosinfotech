# 🆓 Deploy para Servidor Gratuito - Guia Completo

## ⚡ Deploy Otimizado para Servidores Gratuitos

### 🎯 **Problema Resolvido:**
- **Antes**: 1h 36m (com vendor)
- **Depois**: 5-10 minutos (sem vendor)

### 📋 **Secrets Necessários (Apenas FTP):**

1. **FTP_SERVER** - Servidor FTP (ex: `ftp.seuprovedor.com`)
2. **FTP_USERNAME** - Usuário FTP
3. **FTP_PASSWORD** - Senha FTP
4. **FTP_SERVER_DIR** - Pasta do site (ex: `/public_html/`)

### 🚀 **Workflows Disponíveis:**

1. **deploy.yml** - Deploy FTP otimizado (atual)
2. **deploy-free.yml** - Deploy apenas FTP (sem SSH)

### 📊 **Comparação de Velocidade:**

| Método | Tempo | Arquivos | Requisitos |
|--------|-------|----------|------------|
| FTP Completo | 1h 36m | ~10.000 | FTP |
| FTP Otimizado | 5-10m | ~500 | FTP |
| SSH + FTP | 3-5m | ~500 | FTP + SSH |

### 🔧 **Como Funciona:**

1. **GitHub Actions** faz build dos assets
2. **FTP** envia apenas arquivos essenciais (sem vendor)
3. **Você** instala vendor manualmente no servidor

### 📋 **Passos para Deploy:**

#### **1. Configurar Secrets no GitHub:**
- Vá para: `Settings > Secrets and variables > Actions`
- Adicione os secrets FTP

#### **2. Fazer Push:**
```bash
git add .
git commit -m "Deploy"
git push origin main
```

#### **3. Instalar Vendor no Servidor:**

**Opção A - Terminal/SSH (se disponível):**
```bash
cd /caminho/do/seu/site
composer install --no-dev --optimize-autoloader
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --force
```

**Opção B - File Manager (sem SSH):**
1. Acesse o painel de controle
2. Vá para File Manager
3. Faça upload do `composer.phar`
4. Execute via painel web

### 🎯 **Provedores Gratuitos Comuns:**

#### **000WebHost:**
- FTP: `files.000webhost.com`
- Pasta: `/public_html/`
- Terminal: Disponível

#### **InfinityFree:**
- FTP: `ftpupload.net`
- Pasta: `/htdocs/`
- Terminal: Disponível

#### **Hostinger (Gratuito):**
- FTP: `ftp.hostinger.com`
- Pasta: `/public_html/`
- Terminal: Disponível

### 🔧 **Troubleshooting:**

**Erro de permissão:**
- Verifique se a pasta tem permissão 755
- Contate o suporte do provedor

**Composer não encontrado:**
- Use o terminal do painel
- Ou faça upload do composer.phar

**Site não carrega:**
- Verifique se o arquivo `.env` foi enviado
- Verifique se o vendor foi instalado
- Verifique as permissões da pasta `storage`

### 🎉 **Resultado:**

- **Deploy**: 5-10 minutos
- **Arquivos**: ~500 (vs 10.000)
- **Funciona**: Em qualquer servidor gratuito
- **Sem SSH**: Necessário apenas FTP
