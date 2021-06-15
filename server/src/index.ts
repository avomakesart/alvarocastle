import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import 'dotenv-safe/config';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { COOKIE_NAME, __prod__ } from './constants';
import {
  Categories,
  Certificates,
  Contact,
  Experience,
  Projects,
  ProjectCategories,
  Skills,
  Updoot,
  Users,
} from './entities';
import {
  CategoryResolver,
  CertificateResolver,
  ContactResolver,
  ExperienceResolver,
  ProjectCategoryResolver,
  ProjectResolver,
  SkillResolver,
  UserResolver,
} from './resolvers';
import { createUpdootLoader } from './utils/createUpdootLoader';
import { createUserLoader } from './utils/createUserLoader';
import { createCategoryLoader } from './utils/createCategoryLoader';
// import { hostIdentifier } from './utils/hostIdentifier';
// import { dynamicCors } from './utils/dynamicCors';

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    // ssl: {
    //   requestCert: true,
    //   rejectUnauthorized: false,
    // },
    migrations: [path.join(__dirname, './migrations/*')],
    entities: [
      Categories,
      Certificates,
      Contact,
      Experience,
      Projects,
      ProjectCategories,
      Skills,
      Users,
      Updoot,
    ],
  });

  await conn.runMigrations();

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax',
        secure: __prod__,
        domain: __prod__ ? '.alvarocastle.com' : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  app.get('/', ({ res }) =>
    res?.status(200).json({
      greeting: 'Hey welcome to my graphql server',
      message:
        'Just a reminder, this server was created for my personal website https://alvarocastle.com',
      rules:
        'If you want to use it, just go to my repo https://github.com/avomakesart/alvarocastle/tree/main/server, fork it and clone it.',
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        CategoryResolver,
        CertificateResolver,
        ContactResolver,
        ExperienceResolver,
        ProjectResolver,
        ProjectCategoryResolver,
        SkillResolver,
        UserResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      userLoader: createUserLoader(),
      updootLoader: createUpdootLoader(),
      categoryLoader: createCategoryLoader(),
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log(
      `Server started on http://localhost:${parseInt(process.env.PORT)}`
    );
  });
};

main().catch((err) => console.error(err));
