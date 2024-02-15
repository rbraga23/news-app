import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from '../services/news.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetEverythingDto } from '../dto/get-everything.dto';
import { GetTopHeadlinesDto } from '../dto/get-top-headlines.dto';

@ApiTags('News')
@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiOperation({
    summary:
      'This endpoint search through millions of articles from over 80,000 large and small news sources and blogs.',
  })
  getEverything(@Query() getEverythingDto: GetEverythingDto) {
    return this.newsService.getEverything(getEverythingDto);
  }

  @Get('top-headlines')
  @ApiOperation({
    summary:
      'This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first.',
  })
  getTopHeadlines(@Query() getTopHeadlinesDto: GetTopHeadlinesDto) {
    return this.newsService.getTopHeadlines(getTopHeadlinesDto);
  }
}
