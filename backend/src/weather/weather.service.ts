import {
Injectable,
} from '@nestjs/common';

import {
InjectModel,
} from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Cron } from '@nestjs/schedule';

import {
WeatherAlert,
} from './schemas/weather-alert.schema';

import {
User,
} from '../users/schemas/user.schema';

@Injectable()
export class WeatherService {
constructor(
@InjectModel(WeatherAlert.name)
private alertModel: Model<WeatherAlert>,


@InjectModel(User.name)
private userModel: Model<User>,


) {}

@Cron('0 * * * * *')
async generateAlerts() {
console.log(
'Running Weather Scheduler...',
);


const approvedUsers =
  await this.userModel.find({
    status: 'approved',
  });

const alerts = [
  'Heavy Rain Expected',
  'Thunderstorm Alert',
  'Sunny Weather',
  'Cloudy Conditions',
  'Strong Winds Expected',
];

for (const user of approvedUsers) {
  const randomAlert =
    alerts[
      Math.floor(
        Math.random() *
          alerts.length,
      )
    ];

  await this.alertModel.create({
    userId: user._id.toString(),
    email: user.email,
    alert: randomAlert,
  });

  console.log(
    `Alert created for ${user.email}`,
  );
}


}

async getAlerts() {
return this.alertModel
.find()
.sort({
createdAt: -1,
});
}
}
