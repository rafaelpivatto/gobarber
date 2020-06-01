# GoBarber

> 📚 Example learned application made in node, typescript, express, react, react native, typeorm, postgres, jwt, and more stuffs

### 📌 Requirements and tips:

- [Node.js 12+](https://nodejs.org/en/)
- [Yarn 1.22+](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/docker-for-windows/install/)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscod)
- [My VSCode settings.json](https://gist.github.com/rafaelpivatto/b4d77ca681941d68ceed6f1c7ca12c3f)

### 🐳 Docker databases

```bash
# Postgres
docker run --name gostack_postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Mongo
docker run --name gostack_mongo -p 27017:27017 -d -t mongo
```

### 🚀 To run:

> 📌 See [.env.example](https://github.com/rafaelpivatto/gobarber/blob/master/backend/.env.example) to set some environment variables before start backend server

```bash
# Install node dependencies
yarn

# Run migrations
yarn typeorm migration:run

# Start in development mode
yarn dev:server

# 🚀 Server started on port 3333!
```

### 🧪 Run tests:

```bash
yarn test
```

### 🤓 Dev support stuffs...

#### Migration commands:

| Command                                           | Description                     |
| ------------------------------------------------- | ------------------------------- |
| yarn typeorm migration:create -n <migration_name> | To create a new migration       |
| yarn typeorm migration:show                       | To show all migrations executed |
| yarn typeorm migration:revert                     | To revert migration             |

#### 🎉 Many Thanks

Many thanks to [Rockeseat 🚀](https://rocketseat.com.br/) for this incredible journey, teaching very well and shared many utils things for us.
