import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";
import { Is } from "sequelize-typescript";

export class AddReviewDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  rating: number;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  productId: number;
}
