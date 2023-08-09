import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AsyncValidatorFn, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { Observable, Observer, Subscription } from 'rxjs';

export interface EmailForm {
  notificationMode: 'email';
  receiverName: string;
  emailFrom: string | undefined;
  emailTo: string;
  sendResolved: string;
}

export interface TeamsForm {
  notificationMode: 'teams';
  receiverName: string;
  teamsUrl: string;
  sendResolved: string;
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

  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() formValueChange = new EventEmitter<any>();


  nzOkDisabled = true;

  parentForm!: UntypedFormGroup;
  valueChangesSubscription!: Subscription;

  constructor(private fb: UntypedFormBuilder) {

  }

  ngOnInit() {
    this.parentForm = this.fb.group({});
    this.handleNotificationModeChange('email');

    this.parentForm.statusChanges.subscribe(() => {
      this.nzOkDisabled = !this.parentForm.valid;
    })
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
          receiver_type: 'email',
          email_from: formValue.emailFrom,
          email_to: formValue.emailTo,
          send_resolved: formValue.sendResolved === 'true'
        };
      case 'teams':
        return {
          receiver_type: 'teams',
          webhook_url: formValue.teamsUrl,
          send_resolved: formValue.sendResolved === 'true'
        };
      default:
        return null;
    }
  }

  handleNotificationModeChange(mode: string) {
    // 先删除当前 FormGroup 中的所有控件
    Object.keys(this.parentForm.controls).forEach(key => {
      this.parentForm.removeControl(key);
    });

    this.parentForm.addControl('notificationMode', this.fb.control(mode, [Validators.required]));
    this.parentForm.addControl('receiverName', this.fb.control('', [Validators.required]));
    this.parentForm.addControl('sendResolved', this.fb.control('true', [Validators.required]));

    switch (mode) {
      case 'email':
        this.parentForm.addControl('emailFrom', this.fb.control('', Validators.compose([Validators.required]), this.emailFromAsyncValidator as AsyncValidatorFn));
        this.parentForm.addControl('emailTo', this.fb.control('', Validators.compose([Validators.required]), this.emailToAsyncValidator as AsyncValidatorFn));
        break;
      case 'teams':
        this.parentForm.addControl('teamsUrl', this.fb.control('', [Validators.required], this.teamsUrlAsyncValidator as AsyncValidatorFn));
        break;
    }
  }

  teamsUrlAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const urlPattern = /^https:\/\//;
        urlPattern.test(control.value) ? observer.next(null) : observer.next({ error: true });
        observer.complete();
      }, 1000);
    });

  emailToAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const temp = control.value.split(',') as string[];
        temp.every(ele => emailRegex.test(ele)) ? observer.next(null) : observer.next({ error: true });
        observer.complete();
      }, 1000);
    });

  emailFromAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        emailRegex.test(control.value) ? observer.next(null) : observer.next({ error: true });
        observer.complete();
      }, 1000);
    });

}
