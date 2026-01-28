import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import Aos from 'aos';

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
  ngOnInit(): void { Aos.init() }

  allReviews: Review[] = [
    {
      name: "T.Dreifke - Team Partner",
      review: "reviews.review_1",
      img: "/img/pictures/picture_review_01.png"
    },
    {
      name: "D.Moysidis - Team Partner",
      review: "reviews.review_2",
      img: "/img/pictures/picture_review_02.png"
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