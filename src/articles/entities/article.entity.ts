import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client';

export class ArticleEntity implements Article {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published: boolean = false;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
