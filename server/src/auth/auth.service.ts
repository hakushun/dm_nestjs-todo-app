import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentails.dto';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository,
		private jwtService: JwtService,
	) {}

	async getProfile(user: User): Promise<{ username: string }> {
		return { username: user.username };
	}

	async singUp(
		authCredentialsDto: AuthCredentialsDto,
	): Promise<{ accessToken: string; username: string }> {
		const username = await this.userRepository.signUp(authCredentialsDto);

		const payload: JwtPayload = { username };
		const accessToken = await this.jwtService.sign(payload);

		return { accessToken, username };
	}

	async signIn(
		authCredentialsDto: AuthCredentialsDto,
	): Promise<{ accessToken: string; username: string }> {
		const username = await this.userRepository.validateUserPassword(
			authCredentialsDto,
		);

		if (!username) {
			throw new UnauthorizedException();
		}

		const payload: JwtPayload = { username };
		const accessToken = await this.jwtService.sign(payload);

		return { accessToken, username };
	}
}
