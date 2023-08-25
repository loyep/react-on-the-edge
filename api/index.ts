
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify'
import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import Fastify from "fastify";
import { AppModule } from './app.module';

async function bootstrap() {
  const fastify = Fastify({
    logger: false,
  });
  const app: INestApplication<NestFastifyApplication> = await NestFactory.create(AppModule, new FastifyAdapter(fastify));
  await app.init()
  const port = process.env.API_PORT || 3001;
  await app.listen(port);
}

bootstrap();
