import {
  Inject,
  Controller,
  // Get,
  Post,
  // Query,
  Provide,
  // Param,
  // Body,
  // ALL,
} from '@midwayjs/decorator';
import { Context } from 'koa';

import { userService } from '../service/User';

import {
  registerData,
  registerParamDto,
  loginData,
  loginParamDto,
} from '../dto/User.dto';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: userService;

  @Post('/register')
  async registerUser() {
    try {
      const ctx = this.ctx;
      const query: registerData = ctx.query;
      const dto = registerParamDto.create(query);

      const errors = await dto.validate();
      ctx.assert(errors.length === 0, 422, '验证失败', {
        details: errors,
      });

      // 查询是否有已存在的用户名
      const users: any[] = await this.userService.getUserByName(dto.userName);
      if (users.length > 0 && users[0].userName == dto.userName) {
        return { status: 'fail', code: 0, message: '用户名已存在' };
      } else {
        if (dto.password !== dto.repassword) {
          return { status: 'fail', code: 0, message: '密码与重复密码不一致' };
        }
        // 验证都通过时获取用户信息
        const user = await this.userService.createUser(dto);
        return {
          status: 'success',
          code: 200,
          message: '注册成功',
          data: user,
        };
      }
    } catch (error) {
      return { status: 'fail', code: 0, message: '注册失败', data: error };
    }
  }

  @Post('/login')
  async loginUser() {
    try {
      const ctx = this.ctx;
      const query: loginData = ctx.query;
      const dto = loginParamDto.create(query);

      const errors = await dto.validate();
      // 断言是否验证通过
      ctx.assert(errors.length === 0, 422, '验证失败', {
        details: errors,
      });

      const users: any[] = await this.userService.getUserByName(dto.userName);
      if (
        users.length > 0 &&
        users[0].userName == dto.userName &&
        users[0].password == dto.password
      ) {
        return { status: 'success', code: 200, message: '登录成功' };
      } else {
        return { status: 'fail', code: 0, message: '用户名或密码错误' };
      }
    } catch (error) {
      return { status: 'fail', code: 0, message: '登录失败', data: error };
    }
  }

  //   @Get('/getUserById/:id')
  //   async getUserById(@Param() id: number) {
  //     const user = await this.userService.getUserById(id);
  //     return { success: true, message: 'OK', data: user };
  //   }
}
