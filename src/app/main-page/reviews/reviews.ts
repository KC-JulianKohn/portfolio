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
      img: "./img/pictures/picture_placeholder_02.png"
    },
    {
      name: "V. Schuster - Team Partner",
      review: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      img: "./img/pictures/picture_placeholder_03.png"
    },
    {
      name: "V. Schuster - Team Partner",
      review: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      img: "./img/pictures/picture_placeholder_04.png"
    },
  ];
}
