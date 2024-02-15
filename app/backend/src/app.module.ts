import { Module } from '@nestjs/common';
import { NewsModule } from './api/news/news.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NewsModule,
  ],
})
export class AppModule {}
