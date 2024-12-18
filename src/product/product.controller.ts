import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('db1/:id?')
  async getProductFromDb1(@Param('id') id?: string) {
    return this.productService.getProductsFromDb1(id);
  }

  @Get('db2/:id?')
  async getProductFromDb2(@Param('id') id?: string) {
    return this.productService.getProductsFromDb2(id);
  }
}
