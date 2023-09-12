import { Component, OnInit } from '@angular/core';
import { EmailEntity, TeamsEntity } from 'src/app/components/ant-notification-mode-modal/ant-notification-mode-modal.component';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
  }

  clickOpenModal() {
    this.isVisible = true;
  }

  handleFormValueChange(formValue: any) {
    console.log(formValue);
  }
  formData = null;
  formData1: EmailEntity = {
    id: 1,
    receiver_type: 'email',
    send_resolved: false,
    receiver_name: '测试邮件通知',
    email_from: 'test@wistron.com',
    email_to: 'a@wistron.com,b@wistron.com'
  }

  formData2: TeamsEntity = {
    id: 2,
    receiver_type: 'teams',
    send_resolved: true,
    receiver_name: '测试teams通知',
    web_hook_url: 'https://webhook.site/81612175-3482-4147-855b-1258b0121756'
  }
}
