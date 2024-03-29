import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { z as zod } from "zod";
import ShortUniqueId from "short-unique-id";

const prisma = new PrismaClient({
  log: ["query"],
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.get("/poll/count", async () => {
    const count = await prisma.poll.count();
    return { count };
  });

  fastify.get("/user/count", async () => {
    const count = await prisma.user.count();
    return { count };
  });

  fastify.get("/guess/count", async () => {
    const count = await prisma.guess.count();
    return { count };
  });

  fastify.post("/poll", async (request, reply) => {
    const createPollBody = zod.object({
      title: zod.string(),
    });
    const { title } = createPollBody.parse(request.body);
    const generate = new ShortUniqueId({ length: 6 });
    const code = String(generate()).toUpperCase();
    await prisma.poll.create({
      data: {
        title,
        code,
      },
    });
    return reply.status(201).send({ code });
  });

  await fastify.listen({ port: 3333 });
}

bootstrap();
