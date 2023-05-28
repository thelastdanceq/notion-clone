import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { User } from '../../domain/model/user.model';
import { PasswordHashService } from '../../domain/services/password-hash.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly passwordHashService: PasswordHashService,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const hashedPassword = await this.passwordHashService.hashPassword(
      data.password,
    );

    return this.prismaService.user.create({
      data: { hashedPassword: hashedPassword, email: data.email },
    });
  }
}
