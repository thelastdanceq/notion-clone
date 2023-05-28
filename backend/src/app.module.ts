import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/user/user.controller';
import { UserService } from './application/user/user.service';
import { PasswordHashService } from './domain/services/password-hash.service';
import { PrismaService } from './infrastructure/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, PasswordHashService],
})
export class AppModule {}
