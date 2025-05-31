import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

@Table({ timestamps: false })
export class Review extends Model {
  @Column({
    type: DataType.FLOAT
  })
  rating: number;

  @Column({
    type: DataType.TEXT
  })
  description: string;

  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Product)
  @Column
  productId: number;
}