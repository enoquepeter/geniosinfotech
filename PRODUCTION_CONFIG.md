# Configuração de Produção - Genios Infotech

## Variáveis de ambiente necessárias:

```env
APP_NAME="Genios Infotech"
APP_ENV=production
APP_KEY=sua-chave-aqui
APP_DEBUG=false
APP_URL=https://seu-dominio.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_DATABASE=geniosinfotech
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_USERNAME=geniosinfotech@gmail.com
MAIL_PASSWORD=sua-senha-de-app
MAIL_FROM_ADDRESS=geniosinfotech@gmail.com
MAIL_FROM_NAME="Genios Infotech"
```

## Configurações importantes:

- **APP_DEBUG=false** - Desabilita debug em produção
- **LOG_LEVEL=error** - Apenas logs de erro
- **SESSION_ENCRYPT=true** - Criptografa sessões
- **APP_URL** - URL completa do site
