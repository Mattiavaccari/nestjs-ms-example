# NestJS Microservice Example

## Description

This example aims to show a way of using NestJS microservices using a gateway.

## Installation

```bash
$ pnpm install
```

After this, you need to create an `.env` file:

```bash
cp .env.template .env
```

## Running the app

Before running the app, you need to launch the infrastructure.
You can do this with the following command:

```bash
docker-compose up -d
```

Now, you can run the app with the following commands:

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## License

Nest is [MIT licensed](LICENSE).
