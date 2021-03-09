import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ResizeService } from './resize.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private resizeService: ResizeService) {}

  //Define the message pattern for this method
  @Post('resize')
  async resize(
    @Body('imageConfig')
    imageConfig: {
      imageLink: string;
      width: number;
      height: number;
    },
  ) {
    this.logger.log(
      'Resize ' +
        imageConfig.imageLink +
        ' to width: ' +
        imageConfig.width +
        ' and height: ' +
        imageConfig.height,
    );
    return this.resizeService.resize(imageConfig);
  }
}
