import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { AddReviewDto } from './dto/add-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) { }

  @Post()
  async addReview(@Body() addReviewDto: AddReviewDto) {
    return await this.reviewsService.addReview(addReviewDto);
  }

  @Get()
  async getAllReviews() {
    return await this.reviewsService.getAllReviews();
  }

}
