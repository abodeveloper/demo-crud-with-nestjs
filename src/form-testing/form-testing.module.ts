// Form testlash moduli uchun asosiy module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormDataSchema } from './schemas/form-data.schema';
import { FormTestingController } from './form-testing.controller';
import { FormTestingService } from './form-testing.service';

@Module({
  // MongoDB bilan bog'liq schema larni import qilish
  imports: [
    MongooseModule.forFeature([
      { name: FormData.name, schema: FormDataSchema },
    ]),
  ],
  // Kontroller va servislarni ro'yxatga olish
  controllers: [FormTestingController],
  providers: [FormTestingService],
})
export class FormTestingModule {}
