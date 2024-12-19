import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductsFromDb1(id?: string) {
    return this.productRepository.findProductFromDb1(id);
  }

  async getProductsFromDb2(id?: string) {
    return this.productRepository.findProductFromDb2(id);
  }

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async create2(createProductDto: CreateProductDto) {
    return this.productRepository.create2(createProductDto);
  }
}
