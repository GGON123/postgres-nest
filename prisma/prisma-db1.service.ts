import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../prisma/generated/connection1';
@Injectable()
export class PrismaDb1Service extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE1_URL,
        },
      },
    });
  }
}
