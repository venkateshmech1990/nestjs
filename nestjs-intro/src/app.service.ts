import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    return 'Hello World!';
  }
  @Cron(CronExpression.EVERY_DAY_AT_10AM)
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }
}
