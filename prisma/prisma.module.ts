import { Module } from '@nestjs/common';
import { PrismaDb1Service } from './prisma-db1.service';
import { PrismaDb2Service } from './prisma-db2.service';

@Module({
  providers: [PrismaDb1Service, PrismaDb2Service],
  exports: [PrismaDb1Service, PrismaDb2Service],
})
export class PrismaModule {}
