import { Body, Controller, Post } from '@nestjs/common';
import { ResizeService } from './resize/resize.service';
import { RotateService } from './rotate/rotate.service';
import { CompositeService } from './composite/composite.service';
import {CropService} from "./crop/crop.service";

@Controller()
export class AppController {
  constructor(
    private resizeService: ResizeService,
    private rotateService: RotateService,
    private compositeService: CompositeService,
    private cropService: CropService,
  ) {}

  //Define the post for resize method call
  @Post('resize')
  async resize(
    @Body('imageConfig')
    imageConfig: {
      imageLink: string;
      width: number;
      height: number;
    },
  ) {
    return this.resizeService.resize(imageConfig);
  }

  //Define the post for rotate method call
  @Post('rotate')
  async rotate(
    @Body('imageConfig')
    imageConfig: {
      imageLink: string;
      angle: number;
    },
  ) {
    return this.rotateService.rotate(imageConfig);
  }

  //Define the post for composite method call
  @Post('composite')
  async composite(
    @Body('imageConfig')
    imageConfig: {
      imageLink: string;
      imageLink2: string;
    },
  ) {
    return this.compositeService.composite(imageConfig);
  }

  //Define the post for crop method call
  @Post('crop')
  async crop(
    @Body('imageConfig')
    imageConfig: {
      imageLink: string;
      left: number;
      top: number;
      width: number;
      height: number;
    },
  ) {
    return this.cropService.crop(imageConfig);
  }
}
