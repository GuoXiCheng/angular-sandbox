import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormArray, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { distinctUntilChanged } from 'rxjs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

function createParentForm(fb: UntypedFormBuilder, routeName?: string) {
  return fb.group({
    routeName: [routeName, [Validators.required]],
    matcherForms: fb.array([]),
    receiverForms: fb.array([])
  });
}

export interface NotificationRuleForm {
  routeName: string;
  matcherForms: Array<{
    labelName: string;
    operator: string;
    labelValue: string;
  }>;
  receiverForms: Array<{
    selectedValue: string;
  }>
}

export interface NotificationRuleEntity {
  id?: number;
  route_name: string;
  alertmanagerRouteMatchers: Array<{
    label_name: string;
    operator: string;
    label_value: string;
  }>;
  alertmanagerRouteMapReceivers: Array<{
    receiver_type: string;
    receiver_uid: string
  }>
}

@Component({
  selector: 'app-ant-notification-rule-modal',
  templateUrl: './ant-notification-rule-modal.component.html',
  styleUrls: ['./ant-notification-rule-modal.component.css'],
  standalone: true,
  imports: [NzButtonModule, NzInputModule, CommonModule, NzModalModule, NzFormModule, FormsModule, NzSelectModule, NzIconModule, ReactiveFormsModule]
})
export class AntNotificationRuleModalComponent implements OnInit {

  nzOkDisabled = true;

  @Input() isVisible = false;
  @Input() labelNameList: string[] = [];
  @Input() labelValueList: { [label_name: string]: string[] } = {};
  @Input() receiverOptionList: Array<{ receiverType: string, receiverOption: Array<{ uid: string, receiverName: string }> }> = [];
  @Input() formData: NotificationRuleEntity | null = null;

  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() labelNameChange = new EventEmitter<string>();
  @Output() formValueChange = new EventEmitter<NotificationRuleEntity>();

  parentForm!: UntypedFormGroup;

  get matcherForms() {
    return this.parentForm.get('matcherForms') as FormArray;
  }

  get receiverForms() {
    return this.parentForm.get('receiverForms') as FormArray;
  }


  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    if (this.formData === null) {
      this.parentForm = createParentForm(this.fb)
      this.addNewMatcher();
      this.addNewReceiver();
    } else {
      this.entityToForm(this.formData);
    }

    this.parentForm.valueChanges.subscribe(() => {
      this.nzOkDisabled = !this.parentForm.valid;
    });

    // 监听 labelName 的变化，使用 RxJS 的 valueChanges
    this.matcherForms.controls.forEach((subForm, index) => {
      const labelNameControl = subForm.get('labelName');

      labelNameControl?.valueChanges.pipe(
        distinctUntilChanged()
      ).subscribe(newLabelName => {
        this.handleLabelNameChange(newLabelName, index);
      });
    });
  }

  handleOk(): void {
    this.formValueChange.emit(this.formToEntity(this.parentForm.value));
  }

  handleDelete() {
    this.formValueChange.emit(this.formToEntity(this.parentForm.value));
  }

  private formToEntity(formValue: NotificationRuleForm) {
    return {
      id: this.formData?.id,
      route_name: formValue.routeName,
      alertmanagerRouteMatchers: formValue.matcherForms.map(item => ({
        label_name: item.labelName,
        operator: item.operator,
        label_value: item.labelValue
      })),
      alertmanagerRouteMapReceivers: formValue.receiverForms.map(item => {
        const temp = item.selectedValue.split('|');
        return {
          receiver_type: temp[0],
          receiver_uid: temp[1]
        }
      })
    }
  }

  private entityToForm(entityValue: NotificationRuleEntity | null) {
    if (entityValue === null) return;

    this.parentForm = createParentForm(this.fb, entityValue.route_name);

    if (Array.isArray(entityValue.alertmanagerRouteMatchers)) {
      entityValue.alertmanagerRouteMatchers.forEach(item => {
        const subForm = this.fb.group({
          labelName: [item.label_name, [Validators.required]],
          operator: [item.operator, [Validators.required]],
          labelValue: [item.label_value, [Validators.required]]
        });
        this.matcherForms.push(subForm);
      });
    }

    if (Array.isArray(entityValue.alertmanagerRouteMapReceivers)) {
      entityValue.alertmanagerRouteMapReceivers.forEach(item => {
        const subForm = this.fb.group({
          selectedValue: [`${item.receiver_type}|${item.receiver_uid}`, [Validators.required]],
        });
        this.receiverForms.push(subForm);
      });
    }
  }

  handleCancel(): void {
    this.isVisibleChange.emit(false);
  }

  addNewMatcher() {
    const subForm = this.fb.group({
      labelName: ['', [Validators.required]],
      operator: ['', [Validators.required]],
      labelValue: ['', [Validators.required]]
    });
    this.matcherForms.push(subForm);
  }

  clickDelMatcherIcon(matcherIndex: number) {
    this.matcherForms.removeAt(matcherIndex);
  }

  addNewReceiver() {
    const grandForm = this.fb.group({
      selectedValue: ['', [Validators.required]]
    });
    this.receiverForms.push(grandForm);
  }

  clickDelReceiverIcon(receiverIndex: number) {
    this.receiverForms.removeAt(receiverIndex);
  }

  handleLabelNameChange(labelName: string, index: number) {
    this.labelNameChange.emit(labelName);
    const labelValueControl = this.matcherForms.controls[index].get('labelValue');
    labelValueControl?.setValue('');
  }

  getLabelValueList(selectedLabelName: string) {
    return this.labelValueList[selectedLabelName] || [];
  }
}
