import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
export interface DialogData {
  title: string
}

@Component({
  selector: 'app-forest-green-dialog',
  templateUrl: './forest-green-dialog.component.html',
  styleUrls: ['./forest-green-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, MatDividerModule],
})
export class ForestGreenDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }



}
