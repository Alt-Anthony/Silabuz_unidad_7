# Steps

Install depedencies
```bash
npm install
```

Create .env 
```
DATABASE_URL="file:./dev.db"
PORT=8000
```

Migrate prisma

```
npx prisma migrate dev