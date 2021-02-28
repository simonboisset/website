import { PrismaClient } from '@prisma/client';
import { fastify } from 'fastify';
import cors from 'fastify-cors';
const prisma = new PrismaClient();
const app = fastify({
  logger: true,
});
app.register(cors);
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

app.listen(8080, function (err) {
  if (err) {
    app.log.error({ err });
    process.exit(1);
  }
});
