import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilterProductsDto } from './dto/filter-products.dto';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi mahsulot yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Mahsulot muvaffaqiyatli yaratildi',
    type: Product,
  })
  async create(@Body() createProductDto: CreateProductDto): Promise<Product | null> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Barcha mahsulotlarni olish (paginatsiya, filtr, qidiruv bilan)',
  })
  @ApiResponse({
    status: 200,
    description: "Mahsulotlar ro'yxati",
    schema: {
      properties: {
        data: {
          type: 'array',
          items: { $ref: '#/components/schemas/Product' },
        },
        total: { type: 'number' },
        page: { type: 'number' },
        limit: { type: 'number' },
      },
    },
  })
  async findAll(
    @Query() filterDto: FilterProductsDto,
  ): Promise<{ data: Product[]; total: number; page: number; limit: number }> {
    return this.productsService.findAll(filterDto);
  }

  @Get('all')
  @ApiOperation({
    summary:
      'Barcha mahsulotlarni paginatsiyasiz olish (filtr va qidiruv bilan)',
  })
  @ApiResponse({
    status: 200,
    description: "Mahsulotlar ro'yxati",
    type: [Product],
  })
  async findAllWithoutPagination(
    @Query() filterDto: FilterProductsDto,
  ): Promise<Product[]> {
    return this.productsService.findAllWithoutPagination(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: "Mahsulotni ID bo'yicha olish" })
  @ApiResponse({ status: 200, description: 'Mahsulot topildi', type: Product })
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mahsulotni yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Mahsulot yangilandi',
    type: Product,
  })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Mahsulotni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Mahsulot o'chirildi",
    type: Boolean,
  })
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.productsService.remove(id);
  }
}
