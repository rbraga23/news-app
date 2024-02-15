import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { CountryCode } from 'src/types/i18n-codes';
import { Category } from 'src/types/news-api';

export class GetTopHeadlinesDto {
  @ApiProperty({ required: false })
  @IsNotEmpty()
  q: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(CountryCode)
  country?: CountryCode;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(Category)
  category?: Category;

  @ApiProperty({ required: false })
  @IsOptional()
  sources?: string;

  @ApiProperty({ required: false, default: 20 })
  @IsOptional()
  pageSize?: number = 20;

  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  page?: number = 1;
}
