import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentails.dto';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<string>;
    validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string>;
    private hashPassword;
}
