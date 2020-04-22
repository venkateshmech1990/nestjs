import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export const ProductSchema = new mongoose.Schema({//mongoose uses javascript objects
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});


export class Products extends mongoose.Document{
     id: string;  
     @ApiProperty()
     title: string; 
     @ApiProperty() 
     description: string;  
     @ApiProperty()
     price: number;
}