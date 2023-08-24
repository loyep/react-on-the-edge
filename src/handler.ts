import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
// import express from 'express';
import fastify from 'fastify'
// import cors from 'cors';

// const server = express();
// server.use(cors());

let app;
let server = fastify({ logger: true })

const startNestApplication = async () => {
  if (!app) {
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(),
    );
    await nestApp.init();
    app = nestApp;
  }
  return app;
};

export default async (req, res) => {
  if (!app) {
    await startNestApplication();
    // startNestApplication(server)
    //   .then(() => server(req, res))
    //   .catch((err) => console.error(err));
  } else {
    // server.register({

    // })
    // server(req, res);
  }
};
