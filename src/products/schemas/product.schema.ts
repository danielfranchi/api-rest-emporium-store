import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  value: Number,
  img: String,
  qtd: Number,
});
