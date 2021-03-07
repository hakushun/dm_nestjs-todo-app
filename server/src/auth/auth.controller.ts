import {
	Body,
	Controller,
	Get,
	Post,
	Render,
	Req,
	Session,
	ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentails.dto';

@Controller()
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get('signup')
	@Render('signup')
	viewSignUp(@Req() req: Request) {
		return { csrfToken: req.csrfToken() };
	}

	@Get('signin')
	@Render('signin')
	viewSignIn(@Req() req: Request) {
		return { csrfToken: req.csrfToken() };
	}

	@Get('logout')
	logout(@Session() session: Record<string, any>) {
		session.loggedIn = false;
		return;
	}

	@Post('signup')
	async createUser(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
		@Session() session: Record<string, any>,
	) {
		await this.authService.createUser(authCredentialsDto);
		session.loggedIn = true;
		return;
	}

	@Post('signin')
	async authUser(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
		@Session() session: Record<string, any>,
	) {
		await this.authService.authUser(authCredentialsDto);
		session.loggedIn = true;
		return;
	}
}
