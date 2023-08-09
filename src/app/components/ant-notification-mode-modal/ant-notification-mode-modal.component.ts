import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { Observable, Observer, Subscription, debounceTime } from 'rxjs';

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


  nzOkDisabled = false;

  parentForm!: UntypedFormGroup;
  valueChangesSubscription!: Subscription;

  constructor(private fb: UntypedFormBuilder) {
    this.handleNotificationModeChange('email');
  }

  ngOnInit() {
  }

  handleCancel() {
    this.isVisibleChange.emit(false);
  }

  handleOk() {
    console.log(this.parentForm.value)
  }

  handleNotificationModeChange(mode: string) {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe(); // Cancel the previous subscription
    }

    this.createForm(mode); // Create the form with the selected mode

    // Subscribe to the valueChanges event of the new form
    this.valueChangesSubscription = this.parentForm.valueChanges.subscribe(() => {
      console.log(this.parentForm.valid)
      this.nzOkDisabled = !this.parentForm.valid;
    });
  }

  private createForm(mode: string) {
    const commonControls = {
      notificationMode: [mode, [Validators.required]],
      receiverName: ['', [Validators.required]],
      sendResolved: ['true', [Validators.required]]
    };

    switch (mode) {
      case 'email':
        this.parentForm = this.fb.group({
          ...commonControls,
          emailFrom: ['', []],
          emailTo: ['', [Validators.required]]
        });
        break;
      case 'teams':
        this.parentForm = this.fb.group({
          ...commonControls,
          teamsUrl: ['', [Validators.required], [this.teamsUrlAsyncValidator]]
        });
        break;
    }
  }

  teamsUrlAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const urlPattern = /^https:\/\//;
        urlPattern.test(control.value)? observer.next(null): observer.next({error: true});
        observer.complete();
      }, 1000);
    });

}
