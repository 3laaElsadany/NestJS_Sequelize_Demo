import { Injectable } from '@nestjs/common';
import { AddReviewDto } from './dto/add-review.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  constructor(
    @InjectModel(Review)
    private reviewModel: typeof Review,
  ) { }

  async addReview(addReviewDto: AddReviewDto) {
    const review = await this.reviewModel.create({ ...addReviewDto });
    return review;
  }

  async getAllReviews() {
    const reviews = await this.reviewModel.findAll();
    return reviews;
  }

}
