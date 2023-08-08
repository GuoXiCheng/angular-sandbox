import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'app-ant-notification-rule-modal',
  templateUrl: './ant-notification-rule-modal.component.html',
  styleUrls: ['./ant-notification-rule-modal.component.css'],
  standalone: true,
  imports: [CommonModule, NzModalModule, NzFormModule, FormsModule, NzSelectModule, NzIconModule, ReactiveFormsModule]
})
export class AntNotificationRuleModalComponent implements OnInit {
  @Input() isVisible = false;
  @Input() labelNameList: string[] = [];
  @Input() labelValueList: string[] = [];

  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() labelNameChange = new EventEmitter<string>();

  parentForm: FormGroup;

  get subForms() {
    return this.parentForm.get('subForms') as FormArray;
  }

  get grandForms() {
    return this.parentForm.get('grandForms') as FormArray;
  }


  constructor(private fb: FormBuilder) { 
    this.parentForm = this.fb.group({
      routeName: [''],
      subForms: this.fb.array([]),
      grandForms: this.fb.array([])
    });
    this.addNewMatcher();
    this.addNewReceiver();

    // 监听 labelName 的变化，使用 RxJS 的 valueChanges
    this.subForms.controls.forEach((subForm, index) => {
      const labelNameControl = subForm.get('labelName');

      labelNameControl?.valueChanges.pipe(
        distinctUntilChanged()
      ).subscribe(newLabelName => {
        console.log('--')
        this.handleLabelNameChange(newLabelName, index);
      });
    });
    
  }

  ngOnInit() {
  }

  handleOk(): void {
    console.log(this.parentForm.value);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  addNewMatcher() {
    const subForm = this.fb.group({
      labelName: [''],
      operator: [''],
      labelValue: ['']
    });
    this.subForms.push(subForm);
  }

  clickDelMatcherIcon(matcherIndex: number) {
    this.subForms.removeAt(matcherIndex);
  }

  addNewReceiver() {
    const grandForm = this.fb.group({
      selectedValue: ['']
    });
    this.grandForms.push(grandForm);
  }

  clickDelReceiverIcon(receiverIndex: number) {
    this.grandForms.removeAt(receiverIndex);
  }

  handleLabelNameChange(labelName: string, index: number) {
    console.log('hh')
    this.labelNameChange.emit(labelName);
    const labelValueControl = this.subForms.controls[index].get('labelValue');
    labelValueControl?.setValue('');
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
