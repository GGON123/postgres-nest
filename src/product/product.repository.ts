import { Injectable } from '@nestjs/common';
import { PrismaDb1Service } from '../prisma/prisma-db1.service';
import { PrismaDb2Service } from '../prisma/prisma-db2.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductRepository {
  constructor(
    private readonly prismaDb1: PrismaDb1Service,
    private readonly prismaDb2: PrismaDb2Service,
  ) {}

  async findProductFromDb1(id?: string) {
    if (id) {
      return this.prismaDb1.product.findUnique({
        where: { id },
      });
    }
    return this.prismaDb1.product.findMany();
  }

  async findProductFromDb2(id?: string) {
    if (id) {
      return this.prismaDb1.product.findUnique({
        where: { id },
      });
    }
    return this.prismaDb1.product.findMany();
  }

  async create(createProductDto: CreateProductDto) {
    return this.prismaDb1.product.create({
      data: createProductDto,
    });
  }
  async create2(createProductDto: CreateProductDto) {
    return this.prismaDb2.product.create({
      data: createProductDto,
    });
  }
}
