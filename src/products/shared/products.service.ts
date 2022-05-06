import { Injectable } from '@nestjs/common';
import { Product } from './product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  product: any;
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getAll() {
    return await this.productModel.find().exec();
  }

  async getById(id: string) {
    return await this.productModel.findById(id).exec();
  }

  async create(product: Product) {
    const createdTask = new this.productModel(product);
    return await createdTask.save();
  }

  async update(id: string, product: Product) {
    await this.productModel.updateOne({ _id: id }, product).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.productModel.deleteOne({ _id: id }).exec();
  }
}
