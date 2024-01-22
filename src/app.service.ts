import { Injectable } from '@nestjs/common';
import { IUserDB } from './db/user.repository';
import { db } from './db/user.repository';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  somethingLogicToUser(payload) {
    // const user: IUserDB = db.find((e) => e.USER_ID === payload.ID);
    const user: IUserDB = db.find((e) => e.USER_ID === payload.USER_ID);
    return user;
  }
}
