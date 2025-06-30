import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'Kategoriya nomi',
    example: 'Electronics',
    required: false,
  })
  @IsString()
  @IsOptional()
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
