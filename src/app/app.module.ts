import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service'; // Import the AuthService

@NgModule({
  declarations: [AppComponent, RegistrationComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AuthService], // Add AuthService to the providers
  bootstrap: [AppComponent],
})
export class AppModule {}
