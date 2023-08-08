import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent {

  parentForm: FormGroup;

  labelNames: string[] = ['Label1', 'Label2', 'Label3'];
  operators: string[] = ['Operator1', 'Operator2', 'Operator3'];
  labelValues: string[] = ['Value1', 'Value2', 'Value3'];

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      routeName: [''],
      subForms: this.fb.array([])
    });
  }

  get subForms() {
    return this.parentForm.get('subForms') as FormArray;
  }

  addSubForm() {
    const subForm = this.fb.group({
      labelName: [''],
      operator: [''],
      labelValue: ['']
    });
    this.subForms.push(subForm);
  }

  removeSubForm(index: number) {
    this.subForms.removeAt(index);
  }

  submit() {
    console.log(this.parentForm.value);
  }

}
