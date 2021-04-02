import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  app_id: string;

  @Column()
  mobile: string;

  @Column()
  userName: string; // 用户名

  @Column()
  password: string;

  @Column()
  loginSecret: string; // 安全码

  @Column()
  sex: string;

  @Column()
  birthday: string;

  @Column()
  avatar: string;

  @Column()
  email: string;

  @Column()
  userMoney: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'create_time',
    comment: '创建时间',
  })
  create_time: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'update_time',
    comment: '更新时间',
  })
  update_time: Date;
}
