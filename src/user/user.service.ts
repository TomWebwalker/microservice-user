import { USER_REPOSITORY } from './../../constants';
import { User } from './user.model';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserList } from './user-list.object-type';
import { UserInput } from './user.input-type';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserList> {
    return this.userRepository
      .findAndCount()
      .then(([rows, count]) => ({ rows, count }));
  }

  async create(user: UserInput): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(user: User): Promise<User> {
    const userEntity = await this.userRepository.findOneOrFail(user.id);
    return this.userRepository.save({
      ...userEntity,
      ...user,
    });
  }

  async delete(id: number): Promise<boolean> {
    return (await this.userRepository.delete(id)).affected > 0;
  }
}
