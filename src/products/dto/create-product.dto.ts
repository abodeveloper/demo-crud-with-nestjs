import { IsString, IsNotEmpty, IsNumber, IsMongoId, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Mahsulot nomi', example: 'Smartphone' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Mahsulot tavsifi',
    example: 'Latest model smartphone',
    required: false,
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ description: 'Mahsulot narxi', example: 699.99 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Kategoriya ID',
    example: '507f1f77bcf86cd799439011',
  })
  @IsMongoId()
  @IsNotEmpty()
  category: string;
}
