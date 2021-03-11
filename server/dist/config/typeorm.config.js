"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
require('dotenv').config();
exports.typeOrmConfig = {
    type: 'postgres',
    host: process.env.RDS_HOSTNAME || process.env.DB_HOSTNAME,
    port: parseInt(process.env.RDS_PORT) || parseInt(process.env.DB_PORT),
    username: process.env.RDS_USERNAME || process.env.DB_USERNAME,
    password: process.env.RDS_PASSWORD || process.env.DB_PASSWORD,
    database: process.env.RDS_DB_NAME || process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: process.env.TYPEORM_SYNC === 'false' ? false : true,
    ssl: { rejectUnauthorized: false },
};
//# sourceMappingURL=typeorm.config.js.map