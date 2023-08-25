import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function routes(fastify: FastifyInstance, options: any) {
  fastify.get("/", async (_req: FastifyRequest, _res: FastifyReply) => {
    return { hello: "world" };
  });

  fastify.get("/hi", async (_req: FastifyRequest, _res: FastifyReply) => {
    return { hi: "zakiego" };
  });
}