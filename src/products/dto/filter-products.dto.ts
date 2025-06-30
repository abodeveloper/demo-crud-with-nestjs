import { IsOptional, IsInt, Min, IsString, IsMongoId } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FilterProductsDto {
  @ApiProperty({ description: 'Sahifa raqami', example: 1, required: false })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page?: number;

  @ApiProperty({
    description: 'Sahifadagi elementlar soni',
    example: 10,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    description: 'Kategoriya ID',
    example: '507f1f77bcf86cd799439011',
    required: false,
  })
  @IsMongoId()
  @IsOptional()
  category?: string;

  @ApiProperty({
    description: 'Qidiruv matni',
    example: 'phone',
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;
}
