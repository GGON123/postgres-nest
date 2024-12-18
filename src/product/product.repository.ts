import { Injectable } from '@nestjs/common';
import { PrismaDb1Service } from '../../prisma/prisma-db1.service';
import { PrismaDb2Service } from '../../prisma/prisma-db2.service';

@Injectable()
export class ProductRepository {
  constructor(
    private readonly prismaDb1: PrismaDb1Service,
    private readonly prismaDb2: PrismaDb2Service,
  ) {}

  async findProductFromDb1(id?: string) {
    return this.prismaDb1.product.findMany({
      where: id ? { id } : {},
    });
  }

  async findProductFromDb2(id?: string) {
    return this.prismaDb2.product.findMany({
      where: id ? { id } : {},
    });
  }
}
