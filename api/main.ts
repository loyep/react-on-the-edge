
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { AppModule } from './app.module';

async function bootstrap() {
  const fastify = Fastify({
    logger: false,
  });
  const app = await NestFactory.create(AppModule, new FastifyAdapter(fastify));
  await app.init()
  // console.log('app', app.getHttpAdapter().getHttpServer())

  // console.log(fastify.server)
  // const handle = app.getHttpAdapter().getHttpServer()
  // app.use('*', (req, res) => {
  //   console.log(req, res)
  // })

  await app.listen(3001);
}

bootstrap();
