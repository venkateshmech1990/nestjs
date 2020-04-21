import { Products } from './products.model';
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Products>) {

    }


    productDetails: Products[] = [];
    id: number = 0;

    async getProducts() {
        const products = await this.productModel.find();
        return products.map((prod) => ({
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price
        }));//to ignore _id and _v
    }
    async addProducts(title: string, desc: string, price: number) {
        this.id = this.id + 1;
        const newProduct = new this.productModel({ title, description: desc, price });
        const result = await newProduct.save();//wait for the result till it ends alternative to (then)
        return result.id;
    }

    async getProductsById(id: String)  {
         const product = await this.findProduct(id);
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price
        };
    }

    async findProduct(id: String): Promise<Products> {
        let product
        try {
            product = await this.productModel.findById(id);
        } catch (error) {
            throw new NotFoundException('could not find product');
        }
        if (!product) {
            throw new NotFoundException('could not find product');
        }
        return product;
    }
    //...spread operator new instance of array
    async updateProductById(id: string, prodTitle: string, prodDesc: string, prodPrice: number) {
        const updatedProduct = await this.findProduct(id);
        updatedProduct.title = prodTitle;
        updatedProduct.description = prodDesc;
        updatedProduct.price = prodPrice;
        updatedProduct.save();
        return this.productDetails;

    }

    async deleteById(id: string) {
        const product = await this.productModel.deleteOne({_id: id});
        if(product.n === 0){
            throw new NotFoundException('could not find product');
        }
        return 'Product deleted successfully';
    }

}