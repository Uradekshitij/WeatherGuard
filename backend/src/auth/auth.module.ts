import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

import {
  MongooseModule,
} from '@nestjs/mongoose';

import {
  User,
  UserSchema,
} from '../users/schemas/user.schema';

@Module({
  imports: [
    UsersModule,

    JwtModule.register({
      secret:
      process.env.JWT_SECRET || 'weatherguardsecret',

      signOptions: {
        expiresIn: '1d',
      },
    }),
    
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),

  ],

  controllers: [AuthController],

  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}