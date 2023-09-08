import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData: any = {};

  submitForm() {
    // Send the form data to the backend for email processing.
    // You can use Angular HttpClient to send a POST request to your server.
    // Handle the email sending logic on the server-side.
  }
}
