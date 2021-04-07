import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';

import { User } from '../entity/user.entity';

import { registerParamDto } from '../dto/User.dto';

@Provide()
export class userService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getUserByName(userName: string): Promise<User[]> {
    return await this.userModel.find({ userName });
  }

  async createUser(param: registerParamDto): Promise<User> {
    param.userName;
    param.password;
    return await this.userModel.save(param);
  }
}
