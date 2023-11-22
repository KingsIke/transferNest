import { Module } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { UserEntity } from 'src/utils/typeorm/entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UserService,
    },
  ],
  exports: [],
})
export class UserModule {}
