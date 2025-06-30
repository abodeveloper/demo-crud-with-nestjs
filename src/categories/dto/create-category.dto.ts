import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Kategoriya nomi', example: 'Electronics' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Kategoriya tavsifi',
    example: 'Electronic products',
    required: false,
  })
  @IsString()
  @IsOptional()
  description: string;
}
