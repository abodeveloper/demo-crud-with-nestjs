// Form testlash uchun kontroller
import {
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { FormTestingService } from './form-testing.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateFormDataDto } from './dto/create-form-data.dto';
import { UpdateFormDataDto } from './dto/update-form-data.dto';
import { FormData } from './schemas/form-data.schema';

@ApiTags('form-testlash') // Swagger uchun teg
@Controller('form-testing')
export class FormTestingController {
  constructor(private readonly formTestingService: FormTestingService) {}

  @Post()
  @ApiOperation({ summary: "Yangi forma ma'lumotini yaratish" })
  @ApiResponse({
    status: 201,
    description: "Forma ma'lumoti muvaffaqiyatli yaratildi",
    type: FormData,
  })
  @ApiResponse({ status: 400, description: "Noto'g'ri so'rov" })
  async create(@Body() createFormDataDto: CreateFormDataDto) {
    return this.formTestingService.create(createFormDataDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha forma ma'lumotlarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha forma ma'lumotlari qaytarildi",
    type: [FormData],
  })
  async findAll() {
    return this.formTestingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "ID bo'yicha bitta forma ma'lumotini olish" })
  @ApiResponse({
    status: 200,
    description: "Forma ma'lumoti qaytarildi",
    type: FormData,
  })
  @ApiResponse({ status: 404, description: "Forma ma'lumoti topilmadi" })
  async findOne(@Param('id') id: string) {
    return this.formTestingService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: "ID bo'yicha forma ma'lumotini yangilash" })
  @ApiResponse({
    status: 200,
    description: "Forma ma'lumoti muvaffaqiyatli yangilandi",
    type: FormData,
  })
  @ApiResponse({ status: 404, description: "Forma ma'lumoti topilmadi" })
  async update(
    @Param('id') id: string,
    @Body() updateFormDataDto: UpdateFormDataDto,
  ) {
    return this.formTestingService.update(id, updateFormDataDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "ID bo'yicha forma ma'lumotini o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Forma ma'lumoti muvaffaqiyatli o'chirildi",
    type: FormData,
  })
  @ApiResponse({ status: 404, description: "Forma ma'lumoti topilmadi" })
  async delete(@Param('id') id: string) {
    return this.formTestingService.delete(id);
  }
}
