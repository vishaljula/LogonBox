import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService{
	details = [];

	constructor(private http: HttpClient) {}

	getDetails() {
		this.http.get<any>('http://localhost:3000/details').subscribe(res => {
			this.details = res;
		});
	}

	updateDetails(updatedDetails) {
		this.http.post('http://localhost:3000/updateDetails', updatedDetails).subscribe(res => {
		});
	}
}