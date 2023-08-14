import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';

export interface NotificationRule {
  id: number;
  enabled: boolean;
  route_name: string;
  update_by: string;
  update_time: string;
}

@Component({
  selector: 'app-ant-notification-rule-table',
  templateUrl: './ant-notification-rule-table.component.html',
  styleUrls: ['./ant-notification-rule-table.component.css'],
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule, NzIconModule, NzButtonModule, NzCheckboxModule, FormsModule]
})
export class AntNotificationRuleTableComponent implements OnInit {

  @Input() database: NotificationRule[] = [];
  @Input() disabledAllCheckbox = true;

  @Output() editRuleEvent = new EventEmitter<NotificationRule>();
  @Output() addRuleEvent = new EventEmitter<void>();
  @Output() saveEnabledEvent = new EventEmitter<Array<{id: number, enabled: boolean}>>();
  @Output() disabledAllCheckboxChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clickEditBtn(item: NotificationRule) {
    this.editRuleEvent.emit(item);
  }

  clickAddBtn() {
    this.addRuleEvent.emit();
  }

  clickEditEnableBtn() {
    this.disabledAllCheckboxChange.emit(false);
  }

  clickSaveEnabledBtn() {
    this.saveEnabledEvent.emit(this.database.map(item=>({id: item.id, enabled: item.enabled})));
  }
}
