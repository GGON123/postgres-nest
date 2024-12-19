import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';

export const winstonConfig: WinstonModuleOptions = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
};
