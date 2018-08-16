import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'pp-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginData = {}

  constructor(private authService: AuthService) {}

  validateAuthentication() {
    console.log(this.loginData);
    this.authService.loginUser(this.loginData);
  }
}
