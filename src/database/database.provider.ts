import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from './../../constants';

export const databaseProvider = {
  provide: DATABASE_CONNECTION,
  useFactory: async () =>
    await createConnection({
      type: 'mysql',
      host: process.env.MS_USER_DB_HOST,
      port: +process.env.MS_USER_DB_PORT,
      username: process.env.MS_USER_DB_USER,
      password: process.env.MS_USER_DB_PASS,
      database: process.env.MS_USER_DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
};
