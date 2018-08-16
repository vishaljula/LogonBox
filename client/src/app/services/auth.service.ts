import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
	constructor(private http: Http) {}

	loginUser(loginData) {
		this.http.post('http://localhost:3000/login', loginData).subscribe(res => {
			console.log(res);
			localStorage.setItem('token', res.json().token);
		})
	}
}