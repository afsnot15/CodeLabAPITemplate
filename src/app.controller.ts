import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HttpResponse } from './shared/classes/http-response';
import { IResponse } from './shared/interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello World' })
  async getHello(): Promise<IResponse<string>> {
    const data = await this.appService.getHello();

    return new HttpResponse<string>(data).onSuccess('Hello World!');
  }
}
