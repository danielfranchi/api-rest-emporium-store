import { Document } from 'mongoose';

export class Product extends Document {
  name: string;
  description: string;
  value: number;
  img: string;
  qtd: number;
}
