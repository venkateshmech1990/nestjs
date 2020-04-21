import { ProductSchema } from './products.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [MongooseModule.forFeature([{name:'Product', schema: ProductSchema}])],
    controllers: [ProductsController],
    providers: [ProductService],
  })
export class ProductsModule{

}