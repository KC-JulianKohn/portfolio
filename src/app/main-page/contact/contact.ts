import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgClass],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  username: string = '';
  email: string = '';
  message: string = '';
  accepted: boolean = false;
  submitted: boolean = false;
  readyToSend: boolean = false;

  isNameValid(): boolean {
    return this.username.length >= 3;
  }

  isEmailValid(): boolean {
    return this.email.includes('@');
  }

  isMessageValid(): boolean {
    return this.message.length >= 10;
  }

  sendMessage() {
    this.submitted = true;

    if (this.isNameValid() && this.isEmailValid() && this.isMessageValid() && this.accepted) {
      this.submitted = false;
      // hier könntest du später den Versand einbauen
    }
  }
}

