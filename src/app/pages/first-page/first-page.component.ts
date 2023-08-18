import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  searchResult = '';
  async clickSearch() {
    const result = await this.apiService.searchFoodHeat('香蕉');
    this.searchResult = JSON.stringify(result, null, 2);
  }

}
