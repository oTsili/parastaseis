import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShippingDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  shippingAddress: string;

  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @IsNotEmpty()
  @IsString()
  shippingCity: string;

  @IsNotEmpty()
  @IsString()
  shippingTown: string;

  @IsNotEmpty()
  @IsString()
  cardType: string;

  @IsNotEmpty()
  @IsString()
  cardNumber: string;

  @IsNotEmpty()
  @IsString()
  cardCvc: string;

  @IsNotEmpty()
  @IsString()
  expirationDate: string;

  @IsNotEmpty()
  @IsString()
  asShipping: boolean;

  @IsNotEmpty()
  @IsString()
  receiptUsername: string;

  @IsNotEmpty()
  @IsString()
  receiptLastname: string;

  @IsNotEmpty()
  @IsString()
  receiptAddress: string;

  @IsNotEmpty()
  @IsString()
  receiptPostalcode: string;

  @IsNotEmpty()
  @IsString()
  receiptCity: string;

  @IsNotEmpty()
  @IsString()
  receiptTown: string;
}
