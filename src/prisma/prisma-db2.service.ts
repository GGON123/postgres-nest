import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/connection2';

@Injectable()
export class PrismaDb2Service extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE2_URL,
        },
      },
    });
  }
}
