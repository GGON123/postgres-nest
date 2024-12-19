import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AllExceptionsFilter } from './filters/global-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    PrismaModule,
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/application.log' }),
      ],
    }),
  ],
  controllers: [],
  providers: [
    LoggingInterceptor,
    {
      provide: 'APP_FILTER',
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
