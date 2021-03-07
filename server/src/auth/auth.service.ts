import {
	ConflictException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { knex } from '../../db/knex';
import { AuthCredentialsDto } from './dto/auth-credentails.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
	async createUser(authCredentialsDto: AuthCredentialsDto) {
		const { username, password } = authCredentialsDto;

		const target = await knex('users').where('username', username);
		if (target.length !== 0) throw new ConflictException();

		const user = new User();
		const salt = await bcrypt.genSalt();
		user.username = username;
		user.salt = salt;
		user.password = await this.hashPassword(password, salt);

		await knex('users').insert({ ...user });
	}

	async authUser(authCredentialsDto: AuthCredentialsDto) {
		const { username, password } = authCredentialsDto;

		const target = await knex('users').where('username', username);

		if (
			target.length !== 0 &&
			(await this.validatePassword(password, target[0]))
		) {
			return true;
		}
		throw new UnauthorizedException();
	}

	private async hashPassword(password: string, salt: string): Promise<string> {
		return bcrypt.hash(password, salt);
	}

	private async validatePassword(
		password: string,
		user: User,
	): Promise<boolean> {
		const hash = await this.hashPassword(password, user.salt);
		return hash === user.password;
	}
}
