import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

export interface TimeLine {
  date: string;
  exceptionNum: number;
}
@Component({
  selector: 'app-ant-side-bar',
  templateUrl: './ant-side-bar.component.html',
  styleUrls: ['./ant-side-bar.component.css'],
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule, NzBadgeModule]
})
export class AntSideBarComponent implements OnInit {

  @Input() isExpand = true;
  @Input() dataset: TimeLine[] = [];
  @Output() upEvent = new EventEmitter<Dayjs>();
  @Output() downEvent = new EventEmitter<Dayjs>();

  currentDate = dayjs();
  today = dayjs();
  selectedDate = dayjs().format("YYYY-MM-DD")

  constructor() { }

  ngOnInit() {
  }

  clickUpBtn() {
    this.currentDate = this.currentDate.subtract(7, 'day');
    this.upEvent.emit(this.currentDate);
    // this.selectedDate = this.dataset[this.dataset.length-1].date;
  }

  clickDownBtn() {
    if (this.currentDate.format('YYYY-MM-DD') === this.today.format('YYYY-MM-DD')) return;
    this.currentDate = this.currentDate.add(7, 'day');
    this.downEvent.emit(this.currentDate);
    // this.selectedDate = this.dataset[this.dataset.length-1].date;
  }

  clickTimeLineBtn(date: string) {
    console.log(date)
    this.selectedDate = date;
  }

}
