import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  createUser(user: UserEntity): Promise<UserEntity> {
    return this.usersRepository.save(user);
  }
  findAllUser(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOneUser(id: number): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async removeUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
