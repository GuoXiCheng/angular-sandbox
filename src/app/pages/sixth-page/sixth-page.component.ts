import { Component, OnInit } from '@angular/core';
import { NotificationMode } from 'src/app/components/ant-notification-mode-table/ant-notification-mode-table.component';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.css']
})
export class SixthPageComponent implements OnInit {

  database = [{
    id: 1,
    receiver_type: 'email',
    receiver_name: '邮件通知',
    update_by: 'test',
    update_time: '2019-09-20 15:00:00'
  },{
    id: 2,
    receiver_type: 'teams',
    receiver_name: 'teams的通知',
    update_by: 'test',
    update_time: '2019-09-20 15:00:00'
  }]

  constructor() { }

  ngOnInit() {
  }

  handleEditBtnEvent(item: NotificationMode) {
    console.log(item);
  }

  handleAddModeEvent() {
    console.log('add mode clicked');
  }

}
