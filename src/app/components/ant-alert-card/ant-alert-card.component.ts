import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-ant-alert-card',
  templateUrl: './ant-alert-card.component.html',
  styleUrls: ['./ant-alert-card.component.css'],
  standalone: true,
  imports: [CommonModule, NzCardModule, NzIconModule]
})
export class AntAlertCardComponent implements OnInit {

  @Input() severity = 'low';

  constructor() { }

  ngOnInit() {
  }

}
