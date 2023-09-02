import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
