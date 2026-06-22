import { Module } from '@nestjs/common';

import { MongooseModule }
from '@nestjs/mongoose';

import { WeatherController }
from './weather.controller';

import { WeatherService }
from './weather.service';

import {
WeatherAlert,
WeatherAlertSchema,
} from './schemas/weather-alert.schema';

import {
User,
UserSchema,
} from '../users/schemas/user.schema';

@Module({
imports: [
MongooseModule.forFeature([
{
name: WeatherAlert.name,
schema: WeatherAlertSchema,
},
{
name: User.name,
schema: UserSchema,
},
]),
],

controllers: [WeatherController],

providers: [WeatherService],
})
export class WeatherModule {}
