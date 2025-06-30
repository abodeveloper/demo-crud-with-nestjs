import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Category extends Document {
  @ApiProperty({ description: 'Kategoriya nomi', example: 'Electronics' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    description: 'Kategoriya tavsifi',
    example: 'Electronic products',
    required: false,
  })
  @Prop()
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
