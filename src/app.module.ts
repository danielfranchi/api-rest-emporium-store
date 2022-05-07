import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    MongooseModule.forRoot(
      `mongodb+srv://danielap:2022@cluster0.pljin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
    ProductsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
