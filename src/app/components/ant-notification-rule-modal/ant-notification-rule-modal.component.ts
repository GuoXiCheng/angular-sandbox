import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormArray, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { distinctUntilChanged } from 'rxjs';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-ant-notification-rule-modal',
  templateUrl: './ant-notification-rule-modal.component.html',
  styleUrls: ['./ant-notification-rule-modal.component.css'],
  standalone: true,
  imports: [NzInputModule, CommonModule, NzModalModule, NzFormModule, FormsModule, NzSelectModule, NzIconModule, ReactiveFormsModule]
})
export class AntNotificationRuleModalComponent implements OnInit {

  nzOkDisabled = true;

  @Input() isVisible = false;
  @Input() labelNameList: string[] = [];
  @Input() labelValueList: { [label_name: string]: string[] } = {};
  @Input() receiverOptionList: Array<{ receiverType: string, receiverOption: Array<{ uid: string, receiverName: string }> }> = [];

  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() labelNameChange = new EventEmitter<string>();
  @Output() formValueChange = new EventEmitter<any>();

  parentForm: UntypedFormGroup;

  get matcherForms() {
    return this.parentForm.get('matcherForms') as FormArray;
  }

  get receiverForms() {
    return this.parentForm.get('receiverForms') as FormArray;
  }


  constructor(private fb: UntypedFormBuilder) {
    this.parentForm = this.fb.group({
      routeName: ['', [Validators.required]],
      matcherForms: this.fb.array([]),
      receiverForms: this.fb.array([])
    });
    this.addNewMatcher();
    this.addNewReceiver();

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

  ngOnInit() {
    this.parentForm.valueChanges.subscribe(() => {
      this.nzOkDisabled = !this.parentForm.valid;
    });
  }

  handleOk(): void {
    this.formValueChange.emit(this.parentForm.value);
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
