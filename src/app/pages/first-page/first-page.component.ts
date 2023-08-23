import { Component, OnInit } from '@angular/core';
import { TableItem } from 'src/app/components/ant-table/ant-table.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.searchFoodHeat("西瓜").then(result => {
      this.database = result.filter(item => item.name !== null);
    });
  }

  /** app-ant-table */
  database: TableItem[] = []
  /** app-ant-table */

}
