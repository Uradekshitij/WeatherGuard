import {
Injectable,
UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import {
InjectModel,
} from '@nestjs/mongoose';

import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { User } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
constructor(
private jwtService: JwtService,

@InjectModel(User.name)
private userModel: Model<User>,

) {}

async login(
email: string,
password: string,
) {
const user = await this.userModel.findOne({
email,
});


if (!user) {
  throw new UnauthorizedException(
    'Invalid credentials',
  );
}

const isMatch = await bcrypt.compare(
  password,
  user.password,
);

if (!isMatch) {
  throw new UnauthorizedException(
    'Invalid credentials',
  );
}

const token = this.jwtService.sign({
  id: user._id,
  email: user.email,
  role: user.role,
});

return {
  access_token: token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  },
};


}
}
