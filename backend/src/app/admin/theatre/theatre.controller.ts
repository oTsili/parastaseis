import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MultipleFilesInterceptor } from '../interceptors/multipleFiles.interceptor';
import { editFileName, imageFileFilter } from '../utils/image-upload.utils';
import { CreateTheatreDto } from './dto/create-theatre.dto';
import { TheatreService } from './theatre.service';

@Controller('admin/theatre')
export class TheatreController {
  constructor(private theatreService: TheatreService) {}

  @Post('')
  @UseInterceptors(
    FilesInterceptor('files', 2, {
      storage: diskStorage({
        destination: './src',
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
    @Body() createTheatreDto: CreateTheatreDto,
  ) {
    console.log(createTheatreDto);
    console.log(files);

    createTheatreDto.coverImage = files[0].path;
    createTheatreDto.simpleImage = files[0].path;

    const theatre = new this.theatreService.theatreModel(createTheatreDto);

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
}
