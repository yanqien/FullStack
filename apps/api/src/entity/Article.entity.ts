import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@EntityModel()
export class ArticleCate extends BaseEntity {
  @PrimaryGeneratedColumn()
  cate_id: number;

  @Column()
  cate_name: string;

  @Column()
  cate_sort: number;

  @Column()
  dataFlag: number;

  @Column()
  create_time: string;

  @Column()
  update_time: string;
}

@EntityModel()
export class ArticleList extends BaseEntity {
  @PrimaryGeneratedColumn()
  article_id: number;

  @Column()
  user_id: number;

  @Column()
  cate_id: number;

  @Column()
  article_name: string;

  @Column()
  article_title: string;

  @Column()
  article_desc: string;

  @Column()
  article_key: string;

  @Column('longtext')
  article_content: string;

  @Column()
  cover_img: string;

  @Column()
  visitor_num: number;

  @Column()
  like_num: number;

  @Column()
  is_show: number;

  @Column()
  sort: number;

  @Column()
  dataFlag: number;

  @Column('datetime')
  create_time: string;

  @Column('datetime')
  update_time: string;
}
