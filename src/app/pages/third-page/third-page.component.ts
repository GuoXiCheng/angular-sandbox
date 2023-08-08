import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit() {
    this.isVisible = true;
  }

  clickModalBtn() {
    this.isVisible = true;
  }

}
