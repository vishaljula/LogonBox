import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
	constructor(private http: HttpClient) {}

	CONST_TOKEN = 'token';

	get token() {
		return localStorage.getItem(this.CONST_TOKEN);
	}

	get isAuthenticated() {
		return !!localStorage.getItem(this.CONST_TOKEN);
	}

	logout() {
		localStorage.removeItem(this.CONST_TOKEN);
	}

	loginUser(loginData) {
		return this.http.post<any>('http://localhost:3000/login', loginData).subscribe(res => {
			localStorage.setItem(this.CONST_TOKEN, res.token);
		});
	}
}