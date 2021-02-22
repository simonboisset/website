import { PrismaClient } from '@prisma/client';
import { fastify } from 'fastify';
const prisma = new PrismaClient();

const app = fastify({
  logger: true,
});
app.get('/get', async () => {
  const allUsers = await prisma.user.findMany();
  return { allUsers };
});
app.get('/create', async () => {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  });
  const allUsers = await prisma.user.findMany();

  return { allUsers };
});

app.listen(3000, function (err, address) {
  if (err) {
    app.log.error({ err });
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
