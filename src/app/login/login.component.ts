import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any = {};

  constructor(private authService: AuthService) {}

  onLoginSubmit() {
    const loggedIn = this.authService.login(this.user);

    if (loggedIn) {
      console.log('Login successful:', this.user);
    } else {
      console.log('Login failed. Incorrect email or password.');
    }
  }
}
