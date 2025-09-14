import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgClass, TranslatePipe],
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

  constructor(private http: HttpClient) { }

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
      const formData = {
        username: this.username,
        email: this.email,
        message: this.message
      };

      this.http.post<{ status: string, message: string }>('https://julian-kohn.de/sendMail.php', formData).subscribe(
        {
          next: (res) => {
            if (res.status === 'ok') {
              alert(res.message);
              this.submitted = false;
              this.username = '';
              this.email = '';
              this.message = '';
              this.accepted = false;
            } else {
              alert(res.message);
            }
          }, error: (err) => {
            console.error('Fehler:', err);
            alert('Beim Senden ist ein Fehler aufgetreten.');
          }
        });
    }
  }
}
