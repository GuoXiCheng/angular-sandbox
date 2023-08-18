import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

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

    const startsAt = dayjs(starts_at);
    const endsAt = dayjs(ends_at);
    const realEndsAt = endsAt.isAfter(startsAt) ? endsAt: dayjs();

    const durations = dayjs.duration(realEndsAt.diff(startsAt));
    const formattedDuration = `${durations.days()}d ${durations.hours()}h ${durations.minutes()}m`;

    this.cardData = {
      alertname,
      severity,
      status,
      starts_at: dayjs(starts_at).format("YYYY-MM-DD HH:mm:ss"),
      duration: formattedDuration,
      summary: summary? summary: 'NO TITLE',
      description: description? description: 'NO DESCRIPTION'
    }
  }

}
