import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { PrismaDb1Service } from '../prisma/prisma-db1.service';
import { PrismaDb2Service } from '../prisma/prisma-db2.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductRepository,
    PrismaDb1Service,
    PrismaDb2Service,
  ],
})
export class ProductModule {}
