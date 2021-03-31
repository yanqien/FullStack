// import { Rule, RuleType } from '@midwayjs/decorator';
// import { Rule, RuleType } from '@midwayjs/decorator';

import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  validate,
} from 'class-validator';
import { Type, plainToClass, Expose } from 'class-transformer';

export interface ArticleQueryData {
  cate_id?: number | string;

  keyword?: string;
}

export class ArticleQueryDto {
  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(Number.MAX_SAFE_INTEGER)
  @Type(() => Number)
  cate_id!: number;

  @Expose()
  @IsOptional()
  @IsString()
  @MinLength(1, {
    message: 'Title is too short',
  })
  @MaxLength(50, {
    message: 'Title is too long',
  })
  keyword!: string;

  validate() {
    return validate(this, {
      skipMissingProperties: true,
    });
  }

  static create(data: ArticleQueryData) {
    return plainToClass(ArticleQueryDto, data, {
      strategy: 'excludeAll',
    });
  }
}
