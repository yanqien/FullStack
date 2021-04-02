import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class UserRank extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'rank_id',
    comment: '主键id',
  })
  rank_id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    comment: '等级名称',
  })
  rank_name: string;

  @Column('tinyint', {
    nullable: false,
    default: () => 0,
    name: 'is_del',
    comment: '是否删除,1表示删除,0表示正常',
  })
  is_del: number;

  @Column()
  rank_sort: number;

  @Column()
  start_score: number;

  @Column()
  end_score: number;

  @Column('float')
  rebate: number;

  @Column()
  rank_img: string;

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
