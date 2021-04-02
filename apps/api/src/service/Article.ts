import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';

import { ArticleCate, ArticleList } from '../entity/Article.entity';

import { ArticleQueryDto } from '../dto/Article.dto';

@Provide()
export class articleService {
  @InjectEntityModel(ArticleCate)
  articleCateModel: Repository<ArticleCate>;

  async getArticleCate(): Promise<ArticleCate[]> {
    return await this.articleCateModel.find();
  }

  @InjectEntityModel(ArticleList)
  articleListModel: Repository<ArticleList>;

  async getArticleList(query: ArticleQueryDto): Promise<ArticleList[]> {
    query.cate_id;
    console.log(query, 'query');
    return await this.articleListModel.find(query);
  }
}
