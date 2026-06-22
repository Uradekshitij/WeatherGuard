import * as bcrypt from 'bcrypt';

import {
  Injectable,
} from '@nestjs/common';

import {
  InjectModel,
} from '@nestjs/mongoose';

import {
  Model,
} from 'mongoose';

import {
  User,
} from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async requestInvite(
    data: any,
  ) {
    const existingUser =
      await this.userModel.findOne({
        email: dto.email,
      });

    if (existingUser) {
      throw new BadRequestException(
        'Email already exists',
      );
    }
    return this.userModel.create(data);
  }

  async getPendingUsers() {
    return this.userModel.find({
      status: 'pending',
    });
  }

  async getApprovedUsers() {
    return this.userModel.find({
      status: 'approved',
    });
  }

  async approveUser(
    id: string,
  ) {
    return this.userModel.findByIdAndUpdate(
      id,
      {
        status: 'approved',
      },
      {
        new: true,
      },
    );
  }

  async rejectUser(
    id: string,
  ) {
    return this.userModel.findByIdAndUpdate(
      id,
      {
        status: 'rejected',
      },
      {
        new: true,
      },
    );
  }

  async createAdmin() {
  const existingAdmin = await this.userModel.findOne({
    email: 'admin@gmail.com',
  });

  if (existingAdmin) return;

  const hashedPassword =
    await bcrypt.hash('admin123', 10);

  await this.userModel.create({
    name: 'Admin',
    email: 'admin@gmail.com',
    password: hashedPassword,
    role: 'admin',
    status: 'approved',
  });
}
}
