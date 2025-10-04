# 🚀 Deploy Super Rápido - Configuração SSH

## ⚡ Deploy em Menos de 5 Minutos!

### 📋 Secrets Necessários para SSH:

1. **SSH_HOST** - IP ou domínio do servidor
2. **SSH_USERNAME** - Usuário SSH do servidor  
3. **SSH_PRIVATE_KEY** - Chave privada SSH
4. **SSH_WORK_DIR** - Diretório de trabalho (ex: `/home/usuario/public_html`)

### 🔑 Como Gerar Chave SSH:

```bash
# No seu computador local
ssh-keygen -t rsa -b 4096 -C "github-actions@geniosinfotech.com"

# Copiar chave pública para o servidor
ssh-copy-id usuario@seu-servidor.com

# Copiar chave privada para GitHub Secrets
cat ~/.ssh/id_rsa
```

### ⚙️ Configuração do Servidor:

1. **Instalar Composer no servidor:**
```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

2. **Configurar permissões:**
```bash
sudo chown -R www-data:www-data /home/usuario/public_html
sudo chmod -R 755 /home/usuario/public_html
```

### 🎯 Workflows Disponíveis:

1. **deploy.yml** - Deploy via FTP + SSH (atual)
2. **deploy-fast.yml** - Deploy apenas SSH (SUPER RÁPIDO)

### 📊 Comparação de Velocidade:

| Método | Tempo | Arquivos |
|--------|-------|----------|
| FTP Completo | 1h 36m | ~10.000 |
| FTP Otimizado | 15-20m | ~3.000 |
| SSH Apenas | 3-5m | ~500 |

### 🚀 Para Usar Deploy Super Rápido:

1. Configure os secrets SSH no GitHub
2. Renomeie `deploy-fast.yml` para `deploy.yml`
3. Delete o `deploy.yml` antigo
4. Faça push - deploy em 5 minutos!

### 🔧 Troubleshooting:

**Erro de permissão SSH:**
```bash
sudo chmod 600 ~/.ssh/authorized_keys
sudo chmod 700 ~/.ssh
```

**Composer não encontrado:**
```bash
sudo apt update
sudo apt install composer
```

**Laravel não funciona:**
```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
```
