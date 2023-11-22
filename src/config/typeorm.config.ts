import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UserEntity } from 'src/utils/typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOSTNAME,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity],
  synchronize: true,
  autoLoadEntities: true,
  connectTimeout: 30000,
};
