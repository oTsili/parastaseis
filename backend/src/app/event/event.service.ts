import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) public eventModel: Model<EventDocument>,
  ) {}

  async findEventsByCategory(category: string) {
    return this.eventModel.find({ category });
  }
}
