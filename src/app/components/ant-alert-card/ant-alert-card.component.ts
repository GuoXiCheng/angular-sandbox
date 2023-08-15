import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

export interface AlertCard {
  summary: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'firing' | 'resolved';
  starts_at: string;
  duration: string;
  alertname: string;
  description: string;
}

export interface AlertRecordEntity {
  id: number;
  serial: string;
  alertname: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  owner: string;
  status: 'firing' | 'resolved';
  starts_at: string;
  ends_at: string;
  fingerprint: string;
  summary: string | null;
  description: string | null;
}

@Component({
  selector: 'app-ant-alert-card',
  templateUrl: './ant-alert-card.component.html',
  styleUrls: ['./ant-alert-card.component.css'],
  standalone: true,
  imports: [CommonModule, NzCardModule, NzIconModule]
})
export class AntAlertCardComponent implements OnInit {

  cardData!: AlertCard;

  @Input() data!: AlertRecordEntity;

  constructor() {
    
  }

  ngOnInit() {
  
    const {severity, status, starts_at, ends_at, alertname, summary, description} = this.data;

    const startsAt = moment(starts_at);
    const endsAt = moment(ends_at);
    const realEndsAt = endsAt.isAfter(startsAt) ? endsAt: moment();

    const duration = moment.duration(realEndsAt.diff(startsAt));
    const formattedDuration = `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m`;

    this.cardData = {
      alertname,
      severity,
      status,
      starts_at: moment(starts_at).format("YYYY-MM-DD HH:mm:ss"),
      duration: formattedDuration,
      summary: summary? summary: 'NO TITLE',
      description: description? description: 'NO DESCRIPTION'
    }
  }

}
