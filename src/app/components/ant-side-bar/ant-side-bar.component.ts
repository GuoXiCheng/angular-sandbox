import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-ant-side-bar',
  templateUrl: './ant-side-bar.component.html',
  styleUrls: ['./ant-side-bar.component.css'],
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule]
})
export class AntSideBarComponent implements OnInit {

  @Input() isExpand = true;

  currentDate = dayjs();
  today = dayjs();

  dataset = [
    {date: '2023-08-29', exceptionNum: 10},
    {date: '2023-08-30', exceptionNum: 99},
    {date: '2023-08-31', exceptionNum: 156},
    {date: '2023-09-01', exceptionNum: 12365},
    {date: '2023-09-02', exceptionNum: 489},
    {date: '2023-09-03', exceptionNum: 0},
    {date: '2023-09-04', exceptionNum: 1},
  ]

  constructor() { }

  ngOnInit() {
  }

  clickUpBtn() {
    this.currentDate = this.currentDate.subtract(7, 'day'); 
    const result = Array.from({ length: 7 }, (_, index) => index + 1).map((item)=>({
      date: this.currentDate.clone().subtract(item - 1, 'day').format('YYYY-MM-DD'),
      exceptionNum: Math.floor(Math.random() * 100)
    }));
    this.dataset = result.reverse();
  }

  clickDownBtn() {
    if (this.currentDate.format('YYYY-MM-DD') === this.today.format('YYYY-MM-DD')) return;
    this.currentDate = this.currentDate.add(7, 'day');
    const result = Array.from({ length: 7 }, (_, index) => index + 1).map((item)=>({
      date: this.currentDate.clone().subtract(item - 1, 'day').format('YYYY-MM-DD'),
      exceptionNum: Math.floor(Math.random() * 100)
    }));
    this.dataset = result.reverse();
  }

}
