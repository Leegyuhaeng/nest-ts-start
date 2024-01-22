import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { IUserInfo, UserInfo } from './types/user.type';
import { UserInfoDto, UserQueryIdDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('something')
  somethingLogicToUser(@Query() query) {
    // somethingLogicToUser(@Query() query: UserQueryIdDto) {
    // const payload = UserQueryIdDto.Req(query);
    const payload = new UserEntity.Builder().$USER_ID(query.ID).build();
    console.log(payload);

    const result = this.appService.somethingLogicToUser(payload);
    console.log('result===>', result);
    // return UserQueryIdDto.Res(result);
    return new UserEntity.Builder()
      .$USER_ID(result.USER_ID)
      .$NAME(result.NAME)
      .$ADR(result.ADR)
      .build();
  }

  @Get()
  getHello(@Query('ID') ID: number): string {
    console.log(ID, typeof ID);
    return this.appService.getHello();
  }
  @Post()
  getUserInfo(@Body() body: IUserInfo) {
    const payload = UserInfo.Request(body);
    console.log(payload, typeof payload.age);
    return this.appService.getHello();
  }

  @Post('dto')
  @UsePipes(new ValidationPipe({ transform: true }))
  getUserInfoByDto(@Body() body: UserInfoDto) {
    console.log(body, typeof body.age);
    return this.appService.getHello();
  }
}
