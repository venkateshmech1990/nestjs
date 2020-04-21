import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({//mongoose uses javascript objects
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});


export interface Products extends mongoose.Document{
     id: string;  
     title: string;  
     description: string;  
     price: number;
}