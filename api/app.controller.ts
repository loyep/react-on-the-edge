import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/hello2')
  getHello() {
    return this.appService.getHello();
  }

  @Get('/')
  getRoot() {
    return {
      message: 'Hello Vercel!'
    };
  }
}
