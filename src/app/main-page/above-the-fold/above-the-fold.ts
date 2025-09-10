import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  imports: [TranslatePipe],
  templateUrl: './above-the-fold.html',
  styleUrl: './above-the-fold.scss'
})
export class AboveTheFold {
  
}
