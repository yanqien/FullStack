import { Rule, RuleType } from '@midwayjs/decorator';

export class CreateUserInput {
  @Rule(RuleType.string().required().min(2).max(10))
  name!: string;
  password!: string;
}

export class UpdateUserInput {
  @Rule(RuleType.number().required())
  user_id!: number;

  @Rule(RuleType.string().required().min(2).max(10))
  name!: string;
}

export class UserLogin {
  userName?: string;
  password?: string;
}

export class UserRegister {
  name?: string;
  password?: string;
}
