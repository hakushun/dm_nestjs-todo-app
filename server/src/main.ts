import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as session from 'express-session';
import * as express from 'express';
import * as csurf from 'csurf';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { Logger } from '@nestjs/common';
import { join } from 'path';
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

	app.use(
		session({
			secret: 'secret',
			resave: false,
			saveUninitialized: false,
		}),
	);

	app.use(express.urlencoded({ extended: false }));
	app.use(csurf({ cookie: false }));

	// dist/views配下に配置
	app.useStaticAssets(join(__dirname, '..', 'public'));
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setViewEngine('hbs');

	const port = process.env.PORT;
	await app.listen(port);
	logger.log(`server is listening on port:${port}`);
}
bootstrap();
