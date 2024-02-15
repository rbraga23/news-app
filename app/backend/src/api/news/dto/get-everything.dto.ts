import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { CountryCode } from 'src/types/i18n-codes';
import { SearchIn, SortBy } from 'src/types/news-api';

export class GetEverythingDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  q: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(CountryCode)
  language?: CountryCode;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(SearchIn)
  searchIn?: SearchIn;

  @ApiProperty({ required: false })
  @IsOptional()
  sources?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  domains?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  excludeDomains?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  from?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  to?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(SortBy)
  sortBy?: SortBy;

  @ApiProperty({ required: false, default: 20 })
  @IsOptional()
  pageSize?: number = 20;

  @IsOptional()
  @ApiProperty({ required: false, default: 1 })
  page?: number = 1;
}
