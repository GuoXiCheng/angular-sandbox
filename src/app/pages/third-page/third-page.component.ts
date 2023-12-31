import { Component, OnInit } from '@angular/core';
import { NotificationRuleEntity, NotificationRuleForm } from 'src/app/components/ant-notification-rule-modal/ant-notification-rule-modal.component';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  isVisible = false;

  labelNameList = ['test-label-name', 'a', 'b', 'c', 'd']
  labelValueList: {[label_name: string]: string[]} = {};

  receiverOptionList = [{
    receiverType: 'email',
    receiverOption: [
      {
        uid: 'email|451d1488f98b1cd000082b5b310135f5',
        receiverName: '测试邮件通知'
      }
    ]
  }, {
    receiverType: 'teams',
    receiverOption: [
      {
        uid: 'teams|9332ad6500c4cb5759869384985b44fb',
        receiverName: '测试teams通知'
      }
    ]
  }]
  formData1 = null;
  formData = {
    "id": 19,
    "route_name": "test-route-name",
    "alertmanagerRouteMatchers": [
        {
            "label_name": "test-label-name",
            "operator": "!=",
            "label_value": "test-label-value"
        }
    ],
    "alertmanagerRouteMapReceivers": [
        {
            "receiver_uid": "451d1488f98b1cd000082b5b310135f5",
            "receiver_type": "email"
        },
        {
            "receiver_uid": "9332ad6500c4cb5759869384985b44fb",
            "receiver_type": "teams"

        }
    ]
}

  constructor() { }

  ngOnInit() {
  }

  clickModalBtn() {
    this.isVisible = true;
  }

  handleLabelNameChange(labelName: string) {
    if (!(labelName in this.labelValueList)) {
      this.labelValueList[labelName] = this.getLabelValue(labelName);
    }
  }

  handleFormValueChange(formValue: NotificationRuleEntity) {
    console.log(formValue);
  }

  getLabelValue(labelName: string) {
    switch (labelName) {
      case 'a':
        return ['a1', 'a2', 'a3', 'a4'];
      case 'b':
        return ['b1', 'b2', 'b3', 'b4']
      case 'c':
        return ['c1', 'c2', 'c3', 'c4']
      case 'd':
        return ['d1', 'd2', 'd3', 'd4']
      default:
        return [];
    }
  }

}
