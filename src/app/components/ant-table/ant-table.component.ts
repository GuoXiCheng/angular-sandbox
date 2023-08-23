import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

export interface TableItem {
  name: string;
  img: string;
  desc: string;
  heat: string;
}

@Component({
  selector: 'app-ant-table',
  templateUrl: './ant-table.component.html',
  styleUrls: ['./ant-table.component.css'],
  standalone: true,
  imports: [CommonModule, NzTableModule]
})
export class AntTableComponent implements OnInit {

  @Input() database: TableItem[]=[]
  
  constructor() { }

  ngOnInit() {
  }

}
