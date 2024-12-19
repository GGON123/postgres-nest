import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/strategies/jwt.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('db1/:id?')
  async getProductFromDb1(@Param('id') id?: string) {
    return id
      ? this.productService.getProductsFromDb1(id)
      : this.productService.getProductsFromDb1();
  }

  @Get('db1/:id?')
  async getProductFromDb2(@Param('id') id?: string) {
    return id
      ? this.productService.getProductsFromDb2(id)
      : this.productService.getProductsFromDb2();
  }

  @UseGuards(JwtAuthGuard)
  @Post('db1')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @Request() req: any,
  ) {
    const user = req.user;
    return this.productService.create(createProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('db2')
  async createProduct2(
    @Body() createProductDto: CreateProductDto,
    @Request() req: any,
  ) {
    const user = req.user;
    return this.productService.create(createProductDto);
  }
}
