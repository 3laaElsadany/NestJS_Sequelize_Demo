import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { Product } from './products/entities/product.entity';
import { Review } from './reviews/entities/review.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), SequelizeModule.forRoot({
    dialect: process.env.DB_DIALECT as 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Product, Review],
    autoLoadModels: true,
    synchronize: process.env.DB_SYNC === 'true',
  }), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads')
  }), ProductsModule, ReviewsModule]
})
export class AppModule { }