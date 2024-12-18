import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductsFromDb1(id?: string) {
    return this.productRepository.findProductFromDb1(id);
  }

  async getProductsFromDb2(id?: string) {
    return this.productRepository.findProductFromDb2(id);
  }
}
