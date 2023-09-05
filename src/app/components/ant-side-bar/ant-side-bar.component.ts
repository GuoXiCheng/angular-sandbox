import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

export interface TimeLine {
  date: string;
  openNum: number;
  closedNum: number;
  color?: string;
}
@Component({
  selector: 'app-ant-side-bar',
  templateUrl: './ant-side-bar.component.html',
  styleUrls: ['./ant-side-bar.component.css'],
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule, NzBadgeModule]
})
export class AntSideBarComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataset'] && Array.isArray(changes['dataset'].currentValue)) {
      this.dataset = this.dataset.map((item) => ({ ...item, color: this.getBackgroundColor(item.openNum, item.closedNum) }))
    }
  }

  clickUpBtn() {
    this.currentDate = this.currentDate.subtract(7, 'day');
    this.upEvent.emit(this.currentDate);
  }

  clickDownBtn() {
    if (this.currentDate.format('YYYY-MM-DD') === this.today.format('YYYY-MM-DD')) return;
    this.currentDate = this.currentDate.add(7, 'day');
    this.downEvent.emit(this.currentDate);
  }

  clickTimeLineBtn(date: string) {
    console.log(date)
    this.selectedDate = date;
  }

  getBackgroundColor(openNum = 0, closedNum = 0) {
    const totalNum = openNum + closedNum;
    if (totalNum === 0) {
      return `
				#414f51 0%,
				#414f51 100%`;
    } else if (openNum === 0) {
      return `
				#52c41a 0%,
			    #52c41a 100%
			`;
    } else {
      const proportion = Math.round((openNum / totalNum) * 100);
      return `
			    #ff4d4f 0%,
				#ff4d4f ${proportion}%,
				#52c41a ${proportion}%,
				#52c41a 100%
			`;
    }
  }

}
