import {
  Inject,
  Controller,
  Get,
  Post,
  Provide,
  Param,
  Body,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'koa';
import { User } from '../entity/User.entity';
import { UserLogin, UserRegister, CreateUserInput } from '../dto/User.dto';

import { UserService } from '../service/User';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/login')
  async Login(@Body(ALL) user: UserLogin) {
    console.log(user);
    const users: User[] = await this.userService.getUserByName(user.userName);
    let res = {};
    if (
      users.length > 0 &&
      users[0].userName == user.userName &&
      users[0].password == user.password
    ) {
      res = { success: true, message: 'OK' };
    } else {
      res = { success: false, message: 'OK', data: '用户名或密码错误' };
    }
    console.log(res);
    return res;
  }

  @Post('/register')
  async Register(@Body(ALL) user: UserRegister) {
    let res = {};
    try {
      const users: User[] = await this.userService.getUserByName(user.name);
      if (users.length > 0 && users[0].userName == user.name) {
        res = { success: false, message: 'Fail', data: '用户名已存在' };
      } else {
        const createUser: CreateUserInput = new CreateUserInput();
        createUser.name = user.name;
        createUser.password = user.password;
        const resUser: User = await this.userService.createUser(createUser);
        if (resUser) {
          res = { success: true, message: 'OK' };
        } else {
          res = { success: false, message: 'Fail', data: '注册失败' };
        }
      }
    } catch (error) {
      res = { success: false, message: 'Fail', data: error };
    }

    console.log(res);
    return res;
  }

  @Get('/getUserById/:id')
  async getUserById(@Param() id: number) {
    const user = await this.userService.getUserById(id);
    return { success: true, message: 'OK', data: user };
  }
}
