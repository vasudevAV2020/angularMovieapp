import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() {}

  // Simulated user data (replace this with your actual authentication logic)
  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  register(user: any): boolean {
    // Simulated registration logic
    // Check if the email is not already registered
    const isEmailTaken = this.users.some((u) => u.email === user.email);
    if (!isEmailTaken) {
      this.users.push(user);
      return true;
    }
    return false;
  }

  login(user: any): boolean {
    // Simulated login logic
    const matchedUser = this.users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (matchedUser) {
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    // Simulated logout logic
    this.isLoggedInSubject.next(false);
  }
}
