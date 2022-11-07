import Fastify from 'fastify'

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  fastify.get('/polls/count', () => {
    return { count: 123 }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()
