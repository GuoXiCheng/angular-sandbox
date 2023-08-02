import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

export interface FormMsg {
  formType: string,
  formName: string
}


@Component({
  selector: 'app-input-field-group',
  templateUrl: './input-field-group.component.html',
  styleUrls: ['./input-field-group.component.css'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule]
})
export class InputFieldGroupComponent implements OnInit {

  @Output() formDataChanged = new EventEmitter<any>();

  typeList = ['Type A', 'Type B']

  inputFormGroup: FormGroup = new FormGroup({
    formType: new FormControl(''),
    formName: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
    this.inputFormGroup.valueChanges.subscribe((data: FormMsg)=>{
      this.formDataChanged.emit(data);
    });
  }

}
