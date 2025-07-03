// Yangi forma ma'lumotini yaratish uchun DTO
import {
  IsString,
  IsNumber,
  IsDate,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFormDataDto {
  @ApiProperty({
    description: "To'liq ism (ixtiyoriy)",
    example: 'John Doe',
    required: false,
  })
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiProperty({
    description: 'Kirish paroli (ixtiyoriy)',
    example: 'secret123',
    required: false,
  })
  @IsString()
  @IsOptional()
  loginPassword?: string;

  @ApiProperty({
    description: 'Aloqa email (ixtiyoriy)',
    example: 'john@example.com',
    required: false,
  })
  @IsString()
  @IsOptional()
  contactEmail?: string;

  @ApiProperty({
    description: 'Yosh (ixtiyoriy)',
    example: 25,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty({
    description: "Tug'ilgan kun (ixtiyoriy)",
    example: '2000-01-01',
    required: false,
  })
  @IsDate()
  @IsOptional()
  birthDate?: Date;

  @ApiProperty({
    description: 'Uchrashuv vaqti (ixtiyoriy)',
    example: '14:00',
    required: false,
  })
  @IsString()
  @IsOptional()
  appointmentTime?: string;

  @ApiProperty({
    description: 'Hodisa sanasi va vaqti (ixtiyoriy)',
    example: '2025-07-03T14:00:00Z',
    required: false,
  })
  @IsDate()
  @IsOptional()
  eventDateTime?: Date;

  @ApiProperty({
    description: 'Obuna oyi (ixtiyoriy)',
    example: '2025-07',
    required: false,
  })
  @IsString()
  @IsOptional()
  subscriptionMonth?: string;

  @ApiProperty({
    description: 'Dam olish haftasi (ixtiyoriy)',
    example: '2025-W27',
    required: false,
  })
  @IsString()
  @IsOptional()
  vacationWeek?: string;

  @ApiProperty({
    description: 'Veb-sayt manzili (ixtiyoriy)',
    example: 'https://example.com',
    required: false,
  })
  @IsString()
  @IsOptional()
  websiteUrl?: string;

  @ApiProperty({
    description: 'Telefon raqami (ixtiyoriy)',
    example: '+998901234567',
    required: false,
  })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({
    description: "Qidiruv so'rovi (ixtiyoriy)",
    example: 'test search',
    required: false,
  })
  @IsString()
  @IsOptional()
  searchQuery?: string;

  @ApiProperty({
    description: 'Sevimli rang (ixtiyoriy)',
    example: '#ff0000',
    required: false,
  })
  @IsString()
  @IsOptional()
  favoriteColor?: string;

  @ApiProperty({
    description: 'Qoniqish darajasi (ixtiyoriy)',
    example: 75,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  satisfactionLevel?: number;

  @ApiProperty({
    description: 'Obuna holati (ixtiyoriy)',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isSubscribed?: boolean;

  @ApiProperty({
    description: 'Jins (ixtiyoriy, masalan: "male" yoki "female")',
    example: 'male',
    required: false,
  })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({
    description: 'Davlat (ixtiyoriy)',
    example: 'usa',
    required: false,
  })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({
    description: 'Izoh (ixtiyoriy)',
    example: "Bu namunaviy ta'rif",
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
