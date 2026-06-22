import {
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class RequestInviteDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}