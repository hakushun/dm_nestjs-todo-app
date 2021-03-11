import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentails.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getProfile(req: any): Promise<{
        username: string;
    }>;
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
        username: string;
    }>;
    signin(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
        username: string;
    }>;
}
