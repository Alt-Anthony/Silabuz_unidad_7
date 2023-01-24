Objetivos
👉 Utilizar NodeJs y Express.

👉 Las rutas deberán seguir el patrón REST.

👉 Utilizar la librería Prisma.

👉 Utilizar Typescript.

👉 Utilizar SQLite.

👉 Manejar git como equipo.

# Steps

Install depedencies
```bash
npm install
npm i --save-dev @types/jsonwebtoken
```

Create .env 
```
DATABASE_URL="file:./dev.db"
PORT=8000
```

Migrate prisma

```
npx prisma migrate dev
```

## Para tener un SECRET_TOKEN y ponerlo en .env:
### Ingresar en node ```node```
### Escribir el comando: ```require("crypto").randomBytes(64).toString('hex')```
