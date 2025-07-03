// Form ma'lumotlarini saqlash uchun MongoDB schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

// FormData va Documentni birlashtirgan tur
@Schema()
export class FormData extends Document {
  @ApiProperty({ description: "To'liq ism", example: 'John Doe' })
  @Prop() // To'liq ism uchun text input
  fullName: string;

  @ApiProperty({
    description: 'Kirish paroli',
    example: 'secret123',
    required: false,
  })
  @Prop() // Kirish paroli uchun password input
  loginPassword: string;

  @ApiProperty({
    description: 'Aloqa email',
    example: 'john@example.com',
    required: false,
  })
  @Prop() // Aloqa uchun email input
  contactEmail: string;

  @ApiProperty({ description: 'Yosh', example: 25, required: false })
  @Prop() // Yosh uchun number input
  age: number;

  @ApiProperty({
    description: "Tug'ilgan kun",
    example: '2000-01-01',
    required: false,
  })
  @Prop() // Tug'ilgan kun uchun date input
  birthDate: Date;

  @ApiProperty({
    description: 'Uchrashuv vaqti',
    example: '14:00',
    required: false,
  })
  @Prop() // Uchrashuv vaqti uchun time input
  appointmentTime: string;

  @ApiProperty({
    description: 'Hodisa sanasi va vaqti',
    example: '2025-07-03T14:00:00Z',
    required: false,
  })
  @Prop() // Hodisa sanasi va vaqti uchun datetime-local input
  eventDateTime: Date;

  @ApiProperty({
    description: 'Obuna oyi',
    example: '2025-07',
    required: false,
  })
  @Prop() // Obuna oyi uchun month input
  subscriptionMonth: string;

  @ApiProperty({
    description: 'Dam olish haftasi',
    example: '2025-W27',
    required: false,
  })
  @Prop() // Dam olish haftasi uchun week input
  vacationWeek: string;

  @ApiProperty({
    description: 'Veb-sayt manzili',
    example: 'https://example.com',
    required: false,
  })
  @Prop() // Veb-sayt manzili uchun url input
  websiteUrl: string;

  @ApiProperty({
    description: 'Telefon raqami',
    example: '+998901234567',
    required: false,
  })
  @Prop() // Telefon raqami uchun tel input
  phoneNumber: string;

  @ApiProperty({
    description: "Qidiruv so'rovi",
    example: 'test search',
    required: false,
  })
  @Prop() // Qidiruv so'rovi uchun search input
  searchQuery: string;

  @ApiProperty({
    description: 'Sevimli rang',
    example: '#ff0000',
    required: false,
  })
  @Prop() // Sevimli rang uchun color input
  favoriteColor: string;

  @ApiProperty({
    description: 'Qoniqish darajasi',
    example: 75,
    required: false,
  })
  @Prop() // Qoniqish darajasi uchun range input
  satisfactionLevel: number;

  @ApiProperty({ description: 'Obuna holati', example: true, required: false })
  @Prop() // Obuna holati uchun checkbox input
  isSubscribed: boolean;

  @ApiProperty({
    description: 'Jins (masalan: "male" yoki "female")',
    example: 'male',
    required: false,
  })
  @Prop() // Jins uchun radio input
  gender: string;

  @ApiProperty({ description: 'Davlat', example: 'usa', required: false })
  @Prop() // Davlat tanlovi uchun select input
  country: string;

  @ApiProperty({
    description: 'Izoh',
    example: "Bu namunaviy ta'rif",
    required: false,
  })
  @Prop() // Izoh yoki ta'rif uchun textarea input
  description: string;

  @ApiProperty({
    description: "Ma'lumot yaratilgan vaqt",
    example: '2025-07-03T10:05:00Z',
    required: false,
  })
  @Prop({ default: Date.now }) // Ma'lumot yaratilgan vaqt
  createdAt: Date;
}

// ProductDocument ni eksport qilish
export type FormDataDocument = FormData & Document;

// Schema fabrikaning yaratilishi
export const FormDataSchema = SchemaFactory.createForClass(FormData);
