import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getJson')
  //content type will be automatically detected
  getJson(): {name: string} {
    return {name: 'venki'}
  }

  @Get('getJsonHeader')
  @Header('Content-Type','application/json')
  getJsonHeader(): {name: string} {
    return {name: 'venki'}
  }
}
