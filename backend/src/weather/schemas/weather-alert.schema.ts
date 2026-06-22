import {
Prop,
Schema,
SchemaFactory,
} from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type WeatherAlertDocument =
WeatherAlert & Document;

@Schema({
timestamps: true,
})
export class WeatherAlert {
@Prop()
userId: string;

@Prop()
email: string;

@Prop()
alert: string;
}

export const WeatherAlertSchema =
SchemaFactory.createForClass(
WeatherAlert,
);
