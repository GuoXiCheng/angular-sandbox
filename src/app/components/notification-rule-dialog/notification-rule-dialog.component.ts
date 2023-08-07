import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-notification-rule-dialog',
  templateUrl: './notification-rule-dialog.component.html',
  styleUrls: ['./notification-rule-dialog.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatSelectModule, MatTableModule, MatIconModule]
})
export class NotificationRuleDialogComponent implements OnInit {
  matchList = [''];
  notificationModeList = ['']
  pokemonGroups = [
    {
      name: 'Grass',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'},
      ],
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'},
      ],
    }
  ];

  labelNameList = ['a', 'b', 'c'];

  labelValueList = ['1', '2', '3']

  constructor() { }

  ngOnInit() {
  }

  addNewMatch() {
    this.matchList.push('')
  }

  clickDelMatch(index: number) {
    this.matchList.splice(index, 1);
  }

  addNewNotificationMode() {
    this.notificationModeList.push('')
  }

  clickDelNotificationMode(index: number) {
    this.notificationModeList.splice(index, 1);
  }

}
