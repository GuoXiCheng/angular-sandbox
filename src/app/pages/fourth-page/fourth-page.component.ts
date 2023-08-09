import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    this.isVisible = true;
  }

  clickOpenModal() {
    this.isVisible = true;
  }

  handleFormValueChange(formValue: any) {
    console.log(formValue);
  }
}
