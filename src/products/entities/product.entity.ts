import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Review } from 'src/reviews/entities/review.entity';

@Table
export class Product extends Model {
  @Column
  title: string;

  @Column
  image: string;

  @Column({ type: DataType.FLOAT })
  price: number;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  published: boolean;

  @HasMany(() => Review)
  reviews: Review[];
}