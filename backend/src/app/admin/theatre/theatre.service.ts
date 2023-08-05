import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Theatre, TheatreDocument } from './schemas/theatre.schema';
import { Model } from 'mongoose';

@Injectable()
export class TheatreService {
  constructor(
    @InjectModel(Theatre.name) public theatreModel: Model<TheatreDocument>,
  ) {}
}
