import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-ant-notification-rule-modal',
  templateUrl: './ant-notification-rule-modal.component.html',
  styleUrls: ['./ant-notification-rule-modal.component.css'],
  standalone: true,
  imports: [CommonModule, NzModalModule, NzFormModule, FormsModule, NzSelectModule, NzIconModule]
})
export class AntNotificationRuleModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  alertmanagerRouteMatchers = [{
    label_name: '',
    operater: '',
    label_value: ''
  }]
  alertmanagerRouteMapReceivers = [
    {
      selectedValue: 'email|451d1488f98b1cd000082b5b310135f5'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  provinceData = ['Zhejiang', 'Jiangsu'];
  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  labelNameList = ['a', 'b'];
  labelValueList = ['c', 'd'];

  provinceChange(value: string): void {
    // this.selectedCity = this.cityData[value][0];
  }



  addNewMatcher() {
    this.alertmanagerRouteMatchers.push({
      label_name: '',
      label_value: '',
      operater: ''
    });
    console.log(this.alertmanagerRouteMatchers)
  }

  clickDelMatcherIcon(matcherIndex: number) {
    this.alertmanagerRouteMatchers.splice(matcherIndex, 1);
  }

  addNewReceiver() {
    this.alertmanagerRouteMapReceivers.push({
      selectedValue: ''
    });
  }

  clickDelReceiverIcon(receiverIndex: number) {
    this.alertmanagerRouteMapReceivers.splice(receiverIndex, 1);
  }

  receiverOptionGroup = [{
    groupLabel: 'email',
    groupValue: [
      {
        optionLabel: 'email|451d1488f98b1cd000082b5b310135f5',
        optionValue: '测试邮件通知'
      }
    ]
  }, {
    groupLabel: 'teams',
    groupValue: [
      {
        optionLabel: 'teams|9332ad6500c4cb5759869384985b44fb',
        optionValue: '测试teams通知'
      }
    ]
  }]
}
