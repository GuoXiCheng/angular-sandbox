import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

export interface NotificationMode {
  id: number;
  receiver_type: string;
  receiver_name: string;
  update_by: string;
  update_time: string;
}

@Component({
  selector: 'app-ant-notification-mode-table',
  templateUrl: './ant-notification-mode-table.component.html',
  styleUrls: ['./ant-notification-mode-table.component.css'],
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule, NzIconModule, NzButtonModule]
})
export class AntNotificationModeTableComponent implements OnInit {

  @Input() database: NotificationMode[] = [];

  @Output() editBtnEvent = new EventEmitter<NotificationMode>();

  constructor() { }

  ngOnInit() {
  }

  clickEditBtn(item: NotificationMode) {
    this.editBtnEvent.emit(item);
  }
}
