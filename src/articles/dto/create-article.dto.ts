import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  IsBoolean,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  readonly title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly body: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  readonly published?: boolean = false;
}
