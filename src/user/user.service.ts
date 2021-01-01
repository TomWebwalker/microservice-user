import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USER_REPOSITORY } from './../../constants';
import { EntityService } from './../common/entity.service';
import { UserEntity } from './user.entity';
import { UserInput } from './user.input-type';

@Injectable()
export class UserService extends EntityService<UserEntity, UserInput> {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { email, password } });
  }
}
