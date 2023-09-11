import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user: any = {};

  constructor(private authService: AuthService) {}

  onRegisterSubmit() {
    const registered = this.authService.register(this.user);

    if (registered) {
      console.log('Registration successful:', this.user);
    } else {
      console.log('Registration failed. Email already exists.');
    }
  }
}
