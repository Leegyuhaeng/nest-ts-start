import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserServiceImpl } from './user.service.v1';
// import { UserServiceImpl } from './user.service.v2';
// import { UserServiceImpl } from './user.service.v3';

// 컨트롤러 => 인터페이스 => 서비스 순서로감
// 요청시 :  컨트롤러 => 인터페이스 => 서비스 => 레포 , 반환시 : 역순
// controllers 셋팅을 해주고 프로바이더에서는 인터페이스를 셋팅을함 (인터페이스와 같은이름 => 해당 인터페이스를 사용한다는것을 명시)
// useClass (사용하려는 클래스는 인터페이스로 주입시켜 만든 클래스를 셋팅)
// 결합도가 느슨해짐 => 버전이 바뀌면 전부를 수정할 필요없이 해당 import 파일만 바꿔주면 됨
// 설계는 같으면서 버전업을하며 내부로직이 달라질경우를 대비
// 설계는 최대한 추상적으로 공통으로 사용할수있게

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    { provide: 'UserService', useClass: UserServiceImpl },
  ],
})
export class AppModule {}
