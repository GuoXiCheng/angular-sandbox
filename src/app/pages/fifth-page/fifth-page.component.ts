import { Component, OnInit } from '@angular/core';
import { AlertCard } from 'src/app/components/ant-alert-card/ant-alert-card.component';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  cardList: AlertCard[] = [{
    summary: 'First occurrence of GDCEmailAlert',
    severity: 'low',
    status: 'firing',
    alertname: 'GDCEmailAlert',
    start_at: '2021-01-20T10:00:00.000Z',
    duration: '1d 12h 12min'
  }, {
    summary: 'Third occurrence of GDCEmailAlert',
    severity: 'medium',
    status: 'resolved',
    alertname: 'GDCEmailAlert',
    start_at: '2021-01-20T10:00:00.000Z',
    duration: '1d 12h 12min'
  }, {
    summary: 'The pipeline with project name px-web-app failed to run.',
    severity: 'high',
    status: 'firing',
    alertname: 'GDCEmailAlert',
    start_at: '2021-01-20T10:00:00.000Z',
    duration: '1d 12h 12min'
  }, {
    summary: 'Second occurrence of GDCEmailAlert',
    severity: 'critical',
    status: 'resolved',
    alertname: 'GDCEmailAlert',
    start_at: '2021-01-20T10:00:00.000Z',
    duration: '1d 12h 12min'
  }]

  constructor() { }

  ngOnInit() {
  }

}
