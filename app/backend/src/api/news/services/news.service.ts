import { BadRequestException, Injectable } from '@nestjs/common';

import { NewsResponse } from 'src/types/news-api';
import * as NewsAPI from 'newsapi';
import { ConfigService } from '@nestjs/config';
import { GetEverythingDto } from '../dto/get-everything.dto';
import { GetTopHeadlinesDto } from '../dto/get-top-headlines.dto';

@Injectable()
export class NewsService {
  private newsApi: typeof NewsAPI;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get('NEWS_API_KEY');

    this.newsApi = new NewsAPI(apiKey);
  }

  async getEverything(
    getEverythingDto: GetEverythingDto,
  ): Promise<NewsResponse[]> {
    try {
      return await this.newsApi.v2.everything(getEverythingDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getTopHeadlines(
    getTopHeadlinesDto: GetTopHeadlinesDto,
  ): Promise<string> {
    try {
      return await this.newsApi.v2.topHeadlines(getTopHeadlinesDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
