import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  isVisible = false;

  labelNameList = ['a', 'b', 'c', 'd']
  labelValueList: {[label_name: string]: string[]} = {};

  constructor() { }

  ngOnInit() {
    this.isVisible = true;
  }

  clickModalBtn() {
    this.isVisible = true;
  }

  handleLabelNameChange(labelName: string) {
    if (!(labelName in this.labelValueList)) {
      this.labelValueList[labelName] = this.getLabelValue(labelName);
    }
  }

  getLabelValue(labelName: string) {
    switch (labelName) {
      case 'a':
        return ['a1', 'a2', 'a3', 'a4'];
      case 'b':
        return ['b1', 'b2', 'b3', 'b4']
      case 'c':
        return ['c1', 'c2', 'c3', 'c4']
      case 'd':
        return ['d1', 'd2', 'd3', 'd4']
      default:
        return [];
    }
  }

}
