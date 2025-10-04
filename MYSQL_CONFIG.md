# 🗄️ Configuração MySQL - Genios Infotech

## 📋 Configurações necessárias no arquivo .env:

```env
# Database Configuration - MySQL
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=geniosinfotech
DB_USERNAME=root
DB_PASSWORD=
```

## 🔧 Passos para configurar:

### 1. Criar banco de dados
Execute no MySQL:
```sql
CREATE DATABASE geniosinfotech CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 2. Atualizar arquivo .env
Substitua as configurações de banco no arquivo .env:
- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=geniosinfotech
- DB_USERNAME=root
- DB_PASSWORD= (deixe vazio se não tiver senha)

### 3. Executar migrações
```bash
php artisan migrate:fresh
```

### 4. Testar conexão
```bash
php artisan db:check
```

## ⚠️ Importante:
- Certifique-se que o MySQL está rodando
- O banco 'geniosinfotech' deve existir
- As credenciais devem estar corretas
