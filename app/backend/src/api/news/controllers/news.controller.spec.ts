import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from '../services/news.service';

describe('NewsController', () => {
  let controller: NewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsController],
      providers: [NewsService],
    }).compile();

    controller = module.get<NewsController>(NewsController);
  });

  it('should return "Latest News"', () => {
    expect(controller.getEverything()).toBeDefined();
  });
});
