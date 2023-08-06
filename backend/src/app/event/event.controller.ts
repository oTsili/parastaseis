import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import {
  editFileName,
  imageFileFilter,
} from '../admin/utils/image-upload.utils';
import { CreateEventDto } from './dto/create-event.dto';
import { EventService } from './event.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Post('')
  @UseInterceptors(
    FilesInterceptor('files', 2, {
      storage: diskStorage({
        destination: './',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './src/static/uploads',
  //       filename: (req, file, callback) => {
  //         const randomName = Array(32)
  //           .fill(null)
  //           .map(() => Math.round(Math.random() * 16).toString(16))
  //           .join('');
  //         return callback(null, `${randomName}${extname(file.originalname)}`);
  //       },
  //     }),
  //   }),
  // )
  async saveEvent(
    @UploadedFiles() files,
    @Body() createEventDto: CreateEventDto,
  ) {
    console.log(createEventDto);
    console.log(files);

    createEventDto.coverImage = files[0].path;
    createEventDto.simpleImage = files[1].path;

    const theatre = new this.eventService.eventModel(createEventDto);

    await theatre.save();

    const responseObj = {
      property1: theatre.title,
      property2: theatre._id,
    };

    // console.log(coverImage);
    // console.log(simpleImage);
    // return { filename: file.filename };
    return responseObj;
  }

  @Post('ticket')
  async saveTicket(@Body() createTicketDto: CreateTicketDto, @Res() res) {
    console.log(createTicketDto);

    const ticket = new this.eventService.ticketModel(createTicketDto);

    await ticket.save();

    const responseObj = {
      property2: ticket._id,
    };

    return res.status(HttpStatus.OK).json({ responseObj });
  }

  @Get('ticket/:event')
  async fetchTickets(@Req() req, @Res() res, @Param() param) {
    const event = param.event;
    const tickets = await this.eventService.findTicketsByEvent(event);

    console.log({ tickets });

    return res.status(HttpStatus.OK).json({ tickets });
  }

  @Get(':category')
  async fetchAccount(@Req() req, @Res() res, @Param() param) {
    const category = param.category;
    const events = await this.eventService.findEventsByCategory(category);

    console.log({ events });

    return res.status(HttpStatus.OK).json({ events });
  }
}
