import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/utils/typeorm';
import { IUserService } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  createUser() {
    throw new Error('Method not implemented.');
  }
}
