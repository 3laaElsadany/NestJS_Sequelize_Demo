import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) { }

  async createProduct(createProductDto: CreateProductDto, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File not found');
    }
    const product = (await this.productModel.create({ ...createProductDto, image: file.filename })).toJSON();
    delete product.createdAt;
    delete product.updatedAt;
    return product;
  }

  async getAllProducts() {
    const products = await this.productModel.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
    return products;
  }

  async getOneProduct(id: number) {
    const product = await this.productModel.findOne({
      where: { id }
    })
    if (!product) {
      throw new BadRequestException(`Product with id ${id} not found`);
    }

    return product;
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    await this.getOneProduct(id);
    await this.productModel.update(updateProductDto, { where: { id } });
    const product = await this.getOneProduct(id);
    return product;
  }

  async deleteProduct(id: number) {
    await this.getOneProduct(id);
    await this.productModel.destroy({ where: { id } });
    return {
      message: `Product with id ${id} deleted successfully`,
    }
  }

  async getPublishedProduct() {
    const products = await this.productModel.findAll({
      where: { published: true },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    if (products.length === 0) {
      throw new BadRequestException('No published products found');
    }

    return products;
  }

  async getProductReviews() {
    const productReviews = await this.productModel.findAll({
      include: ['reviews']
    });

    return productReviews;
  }
}
