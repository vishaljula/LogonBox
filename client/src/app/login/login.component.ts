import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'pp-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginData = {}

  constructor(private authService: AuthService, private router: Router) {}  

  navigateToDetails() {
	this.router.navigate(['/details']);
  }

  validateAuthentication() {
    this.authService.loginUser(this.loginData).then(function() {
    	this.navigateToDetails();
    }.bind(this));
    localStorage.getItem('token');
  }
}
