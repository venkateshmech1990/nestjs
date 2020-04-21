import { ProductService } from './products.service';
import { Controller, Post, Get, Body, Param, Patch, Delete } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductService) { }
    @Post('addProducts')
    addProducts(
    @Body('title') prodTitle: string, 
    @Body('desc') prodDesc: string, 
    @Body('price') prodPrice: number): any {
        return this.productService.addProducts(prodTitle, prodDesc, prodPrice);
    }

    @Get('getProducts')
    getProducts(): any {
        return this.productService.getProducts();
    }

    @Get('getProducts/:id')
    getProductsById(@Param('id') id: string): any {
        return this.productService.getProductsById(id);
    }

    @Patch('updateProduct/:id')
    updateProductById(@Param('id') id: string,
    @Body('title') prodTitle: string, 
    @Body('desc') prodDesc: string, 
    @Body('price') prodPrice: number) {
     this.productService.updateProductById(id, prodTitle, prodDesc, prodPrice);
    }

    @Delete('deleteProduct/:id')
    deleteById(@Param('id') id: string): any {
        return this.productService.deleteById(id);
    }
}

