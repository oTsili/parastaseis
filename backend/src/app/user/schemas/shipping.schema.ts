import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ShippingDocument = Shipping & Document;

@Schema()
export class Shipping {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  shippingAddress: string;

  @Prop({ required: true })
  postalCode: string;

  @Prop({ required: true })
  shippingCity: string;

  @Prop({ required: true })
  shippingTown: string;

  @Prop({ required: true })
  cardType: string;

  @Prop({ required: true })
  cardNumber: string;

  @Prop({ required: true })
  cardCvc: string;

  @Prop({ required: true })
  expirationDate: string;

  @Prop({ required: true })
  asShipping: boolean;

  @Prop({ required: false })
  receiptUsername: string;

  @Prop({ required: false })
  receiptLastname: string;

  @Prop({ required: false })
  receiptAddress: string;

  @Prop({ required: false })
  receiptPostalcode: string;

  @Prop({ required: false })
  receiptCity: string;

  @Prop({ required: false })
  receiptTown: string;

  _id?: Types.ObjectId;
}

export const shippingSchema = SchemaFactory.createForClass(Shipping);
