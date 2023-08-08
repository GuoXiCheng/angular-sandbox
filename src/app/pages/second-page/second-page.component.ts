import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationRuleDialogComponent } from 'src/app/components/notification-rule-dialog/notification-rule-dialog.component';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openDialog() {
    this.dialog.open(NotificationRuleDialogComponent, {
      data: {title: 'Dialog'},
      width: '37.5rem',
    });
  }
}
