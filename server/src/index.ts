import { PrismaClient } from '@prisma/client';
import { fastify } from 'fastify';
// import cors from 'fastify-cors';
const prisma = new PrismaClient();
const app = fastify({
  logger: true,
  trustProxy: true,
});
// app.register(cors);
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

async function start() {
  const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined;
  const port = process.env.PORT || 3000;
  const address = IS_GOOGLE_CLOUD_RUN ? '0.0.0.0' : undefined;

  try {
    const listen = await app.listen(port, address);
    console.log(`Listening on ${listen}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
start();
