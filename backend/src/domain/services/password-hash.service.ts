import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2 } from 'crypto';
import { promisify } from 'util';

@Injectable()
export class PasswordHashService {
    private readonly pbkdf2Promise = promisify(pbkdf2);
    async hashPassword(password: string): Promise<string> {
        const salt = randomBytes(16).toString('hex');
        const hashedPassword = await this.pbkdf2Promise(password, salt, 10000, 64, 'sha512');
        return `${salt}:${hashedPassword.toString('hex')}`;
    }
}
