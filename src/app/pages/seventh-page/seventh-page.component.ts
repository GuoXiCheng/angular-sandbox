import { Component, OnInit } from '@angular/core';
import { NotificationRule } from 'src/app/components/ant-notification-rule-table/ant-notification-rule-table.component';

@Component({
  selector: 'app-seventh-page',
  templateUrl: './seventh-page.component.html',
  styleUrls: ['./seventh-page.component.css']
})
export class SeventhPageComponent implements OnInit {

  database = [{
    id: 1,
    enabled: true,
    route_name: '通知规则 Test 1',
    update_by: 'test',
    update_time: '2019-01-01 00:00:00'
  }, {
    id: 2,
    enabled: false,
    route_name: '通知规则 Test 2',
    update_by: 'test',
    update_time: '2019-01-01 00:00:00'
  }];

  disabledAllCheckbox = true;

  constructor() { }

  ngOnInit() {
  }

  handleEditRuleEvent(item: NotificationRule) {
    console.log(item);
  }

  handleAddRuleEvent() {
    console.log('click add rule btn')
  }

  handleSaveEnabledEvent(item: any) {
    console.log(item);
    this.disabledAllCheckbox = true;
  }
}
