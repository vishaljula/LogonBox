import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService{
	details = [];

	constructor(private http: Http) {}

	getMsg() {
		this.http.get('http://localhost:3000/posts').subscribe(res => {
			console.log(res);
		});
	}

	getDetails() {
		this.http.get('http://localhost:3000/details').subscribe(res => {
			this.details = res.json();
		});
	}
}