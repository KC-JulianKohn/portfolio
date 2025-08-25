import { Component } from '@angular/core';
import { AboveTheFold } from "./above-the-fold/above-the-fold";
import { AboutMe } from "./about-me/about-me";
import { Skills } from "./skills/skills";
import { Portfolio } from "./portfolio/portfolio";
import { Reviews } from "./reviews/reviews";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-main-page',
  imports: [AboveTheFold, AboutMe, Skills, Portfolio, Reviews, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
