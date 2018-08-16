import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'pp-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  	this.apiService.getDetails();
  }
}
