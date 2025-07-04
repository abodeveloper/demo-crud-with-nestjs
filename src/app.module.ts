import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { FormTestingModule } from './form-testing/form-testing.module';
import { ProductsModule } from './products/products.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        // uri: configService.get<string>('MONGODB_URI'),
        uri: 'mongodb+srv://abodeveloper2811:g4oUnhFAtpOvzTbs@cluster0.clnn5lu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      }),
      inject: [ConfigService],
    }),
    SocketModule,
    FormTestingModule,
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
