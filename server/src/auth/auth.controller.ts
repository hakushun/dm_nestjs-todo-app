import {
	Body,
	Controller,
	Get,
	Post,
	Req,
	UseGuards,
	ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentails.dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get()
	@UseGuards(AuthGuard())
	getProfile(@Req() req: any) {
		return this.authService.getProfile(req.user);
	}
	@Post('signup')
	signUp(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
	): Promise<{ accessToken: string; username: string }> {
		return this.authService.singUp(authCredentialsDto);
	}

	@Post('signin')
	signin(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
	): Promise<{ accessToken: string; username: string }> {
		return this.authService.signIn(authCredentialsDto);
	}
}
