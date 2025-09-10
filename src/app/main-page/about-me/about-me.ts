import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import Aos from 'aos';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  ngOnInit(): void { Aos.init() }
}
