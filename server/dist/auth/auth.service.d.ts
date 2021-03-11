import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentails.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    getProfile(user: User): Promise<{
        username: string;
    }>;
    singUp(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
        username: string;
    }>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
        username: string;
    }>;
}
