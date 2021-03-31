import {
  Inject,
  Controller,
  Get,
  // Post,
  // Query,
  Provide,
  Param,
  // Body,
  // ALL,
} from '@midwayjs/decorator';
import { Context } from 'koa';

import { articleService } from '../service/Article';

import { ArticleQueryData, ArticleQueryDto } from '../dto/Article.dto';

@Provide()
@Controller('/api/article')
export class ArticleController {
  @Inject()
  ctx: Context;

  @Inject()
  articleService: articleService;

  @Get('/getArticleCate')
  async getArticleCateList(@Param() id: number) {
    const articleCate = await this.articleService.getArticleCate();
    return { success: true, message: 'OK', data: articleCate };
  }

  @Get('/getArticleList')
  async getArticleList() {
    const ctx = this.ctx;
    const query: ArticleQueryData = ctx.query;
    const dto = ArticleQueryDto.create(query);

    const errors = await dto.validate();
    ctx.assert(errors.length === 0, 422, '验证失败', {
      details: errors,
    });

    console.log(dto);

    const user = await this.articleService.getArticleList(dto);
    return { success: true, message: 'OK', data: user };
  }
}
