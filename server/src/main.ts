import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { Logger } from '@nestjs/common';
require('dotenv').config();

async function bootstrap() {
	const logger = new Logger('bootstrap');
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	if (process.env.NODE_ENV === 'development') {
		app.enableCors();
	} else {
		app.use(helmet());
		app.enableCors({ origin: process.env.CORS_ORIGIN });
	}

	const port = process.env.PORT;
	await app.listen(port);
	logger.log(`server is listening on port:${port}`);
}
bootstrap();
