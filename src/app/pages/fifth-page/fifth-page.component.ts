import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  cardList = [{
    severity: 'low'
  }, {
    severity: 'medium'
  }, {
    severity: 'high'
  }, {
    severity: 'critical'
  }]

  constructor() { }

  ngOnInit() {
  }

}
