import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class UserScore extends BaseEntity {
  @PrimaryGeneratedColumn()
  score_id: number;

  @Column()
  user_id: number;

  @Column()
  score_num: number;

  @Column()
  score_org: number; // 1：订单 2：评价 3：订单取消返还 4：拒收返还

  @Column()
  score_type: number; // 1：收入 2：支出

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
