import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';

import { User } from '../entity/User.entity';
import { CreateUserInput, UpdateUserInput } from '../dto/User.dto';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getUserById(id: number): Promise<User> {
    console.log(id, this.userModel);
    return await this.userModel.findOne(id);
  }

  async getUserByName(name: string): Promise<User[]> {
    return await this.userModel.find({ userName: name });
  }

  async createUser(user: CreateUserInput): Promise<User> {
    const userModel = new User();
    userModel.userName = user.name;
    userModel.password = user.password;
    console.log(userModel);
    return await this.userModel.save(userModel);
  }

  async updateUser(user: UpdateUserInput): Promise<User> {
    await this.userModel.update(user.user_id, user);
    return await this.getUserById(user.user_id);
  }

  async deleteUser(id: number) {
    return await this.userModel.delete(id);
  }
}
