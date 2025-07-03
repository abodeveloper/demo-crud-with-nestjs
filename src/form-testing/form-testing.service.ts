// Form testlash xizmatlari uchun servis
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormData, FormDataDocument } from './schemas/form-data.schema';
import { CreateFormDataDto } from './dto/create-form-data.dto';
import { UpdateFormDataDto } from './dto/update-form-data.dto';

@Injectable()
export class FormTestingService {
  constructor(
    @InjectModel(FormData.name) private formDataModel: Model<FormDataDocument>,
  ) {}

  // Yangi forma ma'lumotini yaratish
  async create(
    createFormDataDto: CreateFormDataDto,
  ): Promise<FormDataDocument> {
    const createdData = new this.formDataModel(createFormDataDto);
    return createdData.save();
  }

  // Barcha forma ma'lumotlarini olish
  async findAll(): Promise<FormDataDocument[]> {
    return this.formDataModel.find().exec();
  }

  // ID bo'yicha bitta forma ma'lumotini olish
  async findOne(id: string): Promise<FormDataDocument | null> {
    return this.formDataModel.findById(id).exec();
  }

  // ID bo'yicha forma ma'lumotini yangilash
  async update(
    id: string,
    updateFormDataDto: UpdateFormDataDto,
  ): Promise<FormDataDocument | null> {
    return this.formDataModel
      .findByIdAndUpdate(id, updateFormDataDto, {
        new: true,
        runValidators: true,
      })
      .exec();
  }

  // ID bo'yicha forma ma'lumotini o'chirish
  async delete(id: string): Promise<FormDataDocument | null> {
    return this.formDataModel.findByIdAndDelete(id).exec();
  }
}
