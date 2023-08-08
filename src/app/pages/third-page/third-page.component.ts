import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  isVisible = false;

  labelNameList = ['a', 'b', 'c', 'd']
  labelValueList: string[] = [];

  constructor() { }

  ngOnInit() {
    this.isVisible = true;
  }

  clickModalBtn() {
    this.isVisible = true;
  }

  handleLabelNameChange(labelName: string) {
    switch (labelName) {
      case 'a':
        this.labelValueList = ['a1', 'a2', 'a3', 'a4']
        break;
      case 'b':
        this.labelValueList = ['b1', 'b2', 'b3', 'b4']
        break;
      case 'c':
        this.labelValueList = ['c1', 'c2', 'c3', 'c4']
        break;
      case 'd':
        this.labelValueList = ['d1', 'd2', 'd3', 'd4']
        break;
      default:
        break;
    }
  }

}
