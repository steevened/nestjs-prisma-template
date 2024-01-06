import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  readonly body: string;

  @ApiProperty({ required: false, default: false })
  readonly published?: boolean = false;
}
