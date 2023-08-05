import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Theatre, TheatreSchema } from './schemas/theatre.schema';
import { TheatreController } from './theatre.controller';
import { TheatreService } from './theatre.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Theatre.name, schema: TheatreSchema }]),
  ],
  controllers: [TheatreController],
  providers: [TheatreService],
})
export class TheatreModule {}
