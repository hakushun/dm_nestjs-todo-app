import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: process.env.RDS_HOSTNAME || process.env.DB_HOSTNAME,
	port: parseInt(process.env.RDS_PORT) || parseInt(process.env.DB_PORT),
	username: process.env.RDS_USERNAME || process.env.DB_USERNAME,
	password: process.env.RDS_PASSWORD || process.env.DB_PASSWORD,
	database: process.env.RDS_DB_NAME || process.env.DB_NAME,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	synchronize: process.env.TYPEORM_SYNC === 'false' ? false : true,
};
