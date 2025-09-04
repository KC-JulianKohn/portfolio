import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  username: string = '';
  email: string = '';
  message: string = '';
  accepted: boolean = false;
  submitted: boolean = false;

  sendMessage() {
    this.submitted = true;
    if (!this.accepted) {

    } else {
      this.submitted = false;
    }
  }
}
