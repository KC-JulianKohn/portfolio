import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Review {
  name: string;
  review: string;
  img: string,
}

@Component({
  selector: 'app-reviews',
  imports: [TranslatePipe],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews {
  allReviews: Review[] = [
    {
      name: "V. Schuster - Team Partner",
      review: "reviews.review_1",
      img: "/img/pictures/picture_placeholder_03.png"
    },
    {
      name: "E.Eichinger - Team Partner",
      review: "reviews.review_2",
      img: "/img/pictures/picture_placeholder_04.png"
    },
    {
      name: "I.Nuber - Frontend Engineer",
      review: "reviews.review_3",
      img: "/img/pictures/picture_placeholder_02.png"
    },
  ];

  currentIndex: number = 0;

  nextReview() {
    this.currentIndex = (this.currentIndex + 1) % this.allReviews.length;
  }

  prevReview() {
    this.currentIndex =
      (this.currentIndex - 1 + this.allReviews.length) % this.allReviews.length;
  }
}