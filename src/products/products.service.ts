import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { FilterProductsDto } from './dto/filter-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product | null> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct
      .save()
      .then((product) =>
        this.productModel.findById(product._id).populate('category').exec(),
      );
  }

  async findAll(
    filterDto: FilterProductsDto,
  ): Promise<{ data: Product[]; total: number; page: number; limit: number }> {
    const { page = 1, limit = 10, category, search } = filterDto;

    const query: any = {};

    if (category) {
      query.category = category; // Faqat ID ni tekshirish
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (page - 1) * limit;
    const total = await this.productModel.countDocuments(query).exec();
    const data = await this.productModel
      .find(query)
      .populate('category') // Kategoriya ma'lumotlarini to'liq yuklaydi
      .skip(skip)
      .limit(limit)
      .exec();

    return { data, total, page, limit };
  }

  async findAllWithoutPagination(
    filterDto: FilterProductsDto,
  ): Promise<Product[]> {
    const { category, search } = filterDto;

    const query: any = {};

    if (category) {
      query.category = category; // Faqat ID ni tekshirish
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const data = await this.productModel
      .find(query)
      .populate('category') // Kategoriya ma'lumotlarini to'liq yuklaydi
      .exec();

    return data;
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel
      .findById(id)
      .populate('category')
      .exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .populate('category')
      .exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.productModel.deleteOne({ _id: id }).exec();
    return result.deletedCount > 0;
  }
}
