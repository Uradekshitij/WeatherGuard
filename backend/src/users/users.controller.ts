import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
} from '@nestjs/common';

import { UsersService } from './users.service';

import {
UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard }
from '../common/guards/jwt-auth.guard';

import { RolesGuard }
from '../common/guards/roles.guard';

import { Roles }
from '../common/decorators/roles.decorator';


@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @Post('request-invite')
  requestInvite(
    @Body() body,
  ) {
    return this.usersService.requestInvite(
      body,
    );
  }

  @Get('pending')
  getPendingUsers() {
    return this.usersService.getPendingUsers();
  }

  @Get('approved')
  getApprovedUsers() {
    return this.usersService.getApprovedUsers();
  }

  @Patch(':id/approve')
  @UseGuards(
  JwtAuthGuard,
  RolesGuard,
  )
  @Roles('admin')
  approveUser(
  @Param('id') id: string,
  ) {
  return this.usersService.approveUser(
  id,
  );
  }


  @Patch(':id/reject')
  @UseGuards(
  JwtAuthGuard,
  RolesGuard,
  )
  @Roles('admin')
  rejectUser(
  @Param('id') id: string,
  ) {
  return this.usersService.rejectUser(
  id,
  );
  }

}