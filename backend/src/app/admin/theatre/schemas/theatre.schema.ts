import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TheatreDocument = Theatre & Document;

@Schema()
export class Theatre {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  simpleImage: string;

  @Prop({ required: true })
  coverImage: string;

  _id?: Types.ObjectId;
}

export const TheatreSchema = SchemaFactory.createForClass(Theatre);
