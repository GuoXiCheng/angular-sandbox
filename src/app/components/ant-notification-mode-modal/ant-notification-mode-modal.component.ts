import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AsyncValidatorFn, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { Observable, Observer } from 'rxjs';

export interface EmailForm {
  notificationMode: 'email';
  receiverName: string;
  emailFrom?: string;
  emailTo: string;
  sendResolved: string;
}

export interface EmailEntity {
  id?: number;
  receiver_name: string;
  receiver_type: 'email';
  email_from?: string;
  email_to: string;
  send_resolved: boolean;
}

export interface TeamsForm {
  notificationMode: 'teams';
  receiverName: string;
  teamsUrl: string;
  sendResolved: string;
}

export interface TeamsEntity {
  id?: number;
  receiver_name: string;
  receiver_type: 'teams';
  web_hook_url: string;
  send_resolved: boolean;
}

@Component({
  selector: 'app-ant-notification-mode-modal',
  templateUrl: './ant-notification-mode-modal.component.html',
  styleUrls: ['./ant-notification-mode-modal.component.css'],
  standalone: true,
  imports: [CommonModule, NzModalModule, NzInputModule, NzFormModule, FormsModule, NzSelectModule, ReactiveFormsModule, NzRadioModule]
})
export class AntNotificationModeModalComponent implements OnInit {

  @Input() isVisible = false;
  @Input() formData: EmailEntity | TeamsEntity | null = null;

  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() formValueChange = new EventEmitter<any>();


  nzOkDisabled = true;
  nzDisabledSelect = false;
  parentForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {

  }

  ngOnInit() {

    this.parentForm = this.fb.group({});

    if (this.formData === null) {
      this.handleNotificationModeChange('email');
      this.nzDisabledSelect = false;
    } else {
      this.handleNotificationModeChange(this.formData.receiver_type, this.formData);
      this.nzDisabledSelect = true;
    }

    this.parentForm.statusChanges.subscribe(() => {
      this.nzOkDisabled = !this.parentForm.valid;
    });
  }

  handleCancel() {
    this.isVisibleChange.emit(false);
  }

  handleOk() {
    this.formValueChange.emit(this.formToEntity(this.parentForm.value));
  }

  formToEntity(formValue: EmailForm | TeamsForm) {
    switch (formValue.notificationMode) {
      case 'email':
        return {
          id: this.formData?.id,
          receiver_type: 'email',
          email_from: formValue.emailFrom,
          email_to: formValue.emailTo,
          send_resolved: formValue.sendResolved === 'true'
        };
      case 'teams':
        return {
          id: this.formData?.id,
          receiver_type: 'teams',
          webhook_url: formValue.teamsUrl,
          send_resolved: formValue.sendResolved === 'true'
        };
      default:
        return null;
    }
  }

  handleNotificationModeChange(mode: string, entity?: EmailEntity | TeamsEntity) {
    // 先删除当前 FormGroup 中的所有控件
    Object.keys(this.parentForm.controls).forEach(key => {
      this.parentForm.removeControl(key);
    });

    this.parentForm.addControl('notificationMode', this.fb.control(mode, [Validators.required]));
    this.parentForm.addControl('receiverName', this.fb.control(entity?.receiver_name, [Validators.required]));
    this.parentForm.addControl('sendResolved', this.fb.control(entity ? entity.send_resolved.toString() : 'true', [Validators.required]));

    switch (mode) {
      case 'email':
        this.parentForm.addControl('emailFrom', this.fb.control((entity as EmailEntity)?.email_from, Validators.compose([Validators.required]), this.emailFromAsyncValidator as AsyncValidatorFn));
        this.parentForm.addControl('emailTo', this.fb.control((entity as EmailEntity)?.email_to, Validators.compose([Validators.required]), this.emailToAsyncValidator as AsyncValidatorFn));
        break;
      case 'teams':
        this.parentForm.addControl('teamsUrl', this.fb.control((entity as TeamsEntity)?.web_hook_url, [Validators.required], this.teamsUrlAsyncValidator as AsyncValidatorFn));
        break;
    }
  }

  teamsUrlAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const urlPattern = /^https:\/\//;
        urlPattern.test(control.value) ? observer.next(null) : observer.next({ error: true });
        observer.complete();
        this.nzOkDisabled = !this.parentForm.valid;
      }, 1000);
    });

  emailToAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const temp = control.value.split(',') as string[];
        temp.every(ele => emailRegex.test(ele)) ? observer.next(null) : observer.next({ error: true });
        observer.complete();
        this.nzOkDisabled = !this.parentForm.valid;
      }, 1000);
    });

  emailFromAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        emailRegex.test(control.value) ? observer.next(null) : observer.next({ error: true });
        observer.complete();
        this.nzOkDisabled = !this.parentForm.valid;
      }, 1000);
    });

}
