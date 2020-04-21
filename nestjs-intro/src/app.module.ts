import { LoggingInterceptor } from './shared/logging.interceptors';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error-filter';

@Module({
  imports: [ProductsModule, ScheduleModule.forRoot(), MongooseModule.forRoot('mongodb+srv://admin:99O4QxhhWB6yQcIQ@democluster-awncj.mongodb.net/nestjs-demo?retryWrites=true&w=majority', { useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  }],
})
export class AppModule {}
