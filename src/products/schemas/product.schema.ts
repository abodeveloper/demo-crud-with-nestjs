import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Product extends Document {
  @ApiProperty({ description: 'Mahsulot nomi', example: 'Smartphone' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    description: 'Mahsulot tavsifi',
    example: 'Latest model smartphone',
    required: false,
  })
  @Prop()
  description: string;

  @ApiProperty({ description: 'Mahsulot narxi', example: 699.99 })
  @Prop({ required: true })
  price: number;

  @ApiProperty({
    description: 'Kategoriya ID',
    example: '507f1f77bcf86cd799439011',
    type: String,
  })
  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;
}

// ProductDocument ni eksport qilish
export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
