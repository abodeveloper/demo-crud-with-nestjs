import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schemas/category.schema';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi kategoriya yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Kategoriya muvaffaqiyatli yaratildi',
    type: Category,
  })
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha kategoriyalarni olish' })
  @ApiResponse({
    status: 200,
    description: "Kategoriyalar ro'yxati",
    type: [Category],
  })
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Kategoriyani ID bo'yicha olish" })
  @ApiResponse({
    status: 200,
    description: 'Kategoriya topildi',
    type: Category,
  })
  async findOne(@Param('id') id: string): Promise<Category| null> {
    return this.categoriesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Kategoriyani yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Kategoriya yangilandi',
    type: Category,
  })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category | null> {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Kategoriyani o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Kategoriya o'chirildi",
    type: Boolean,
  })
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.categoriesService.remove(id);
  }
}
