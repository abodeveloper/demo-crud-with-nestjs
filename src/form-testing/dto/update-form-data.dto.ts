// Forma ma'lumotini yangilash uchun DTO
import { PartialType } from '@nestjs/mapped-types';
import { CreateFormDataDto } from './create-form-data.dto';

// Update uchun Create DTO dan foydalanib, barcha field larni ixtiyoriy qilish
export class UpdateFormDataDto extends PartialType(CreateFormDataDto) {}
