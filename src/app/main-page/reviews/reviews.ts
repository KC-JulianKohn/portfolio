import { Component } from '@angular/core';

interface Review {
  name: string;
  review: string;
  img: string,
}

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews {
  allReviews: Review[] = [
    {
      name: "V. Schuster - Team Partner",
      review: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      img: "./img/pictures/picture_placeholder_03.png"
    },
    {
      name: "E.Eichinger - Team Partner",
      review: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
      img: "./img/pictures/picture_placeholder_04.png"
    },
    {
      name: "I.Nuber - Frontend Engineer",
      review: "It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.",
      img: "./img/pictures/picture_placeholder_02.png"
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
