import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class UserAddress extends BaseEntity {
  @PrimaryGeneratedColumn()
  address_id: number;

  @Column()
  user_id: string;

  @Column()
  user_name: string;

  @Column()
  user_mobile: string;

  @Column()
  province_id: number;

  @Column()
  city_id: number;

  @Column()
  area_id: number;

  @Column()
  address: number;

  @Column()
  full_address: number;

  @Column()
  is_default: number;

  @Column()
  dataFlag: number;

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
