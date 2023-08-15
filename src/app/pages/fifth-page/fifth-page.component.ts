import { Component, OnInit } from '@angular/core';
import { AlertRecordEntity } from 'src/app/components/ant-alert-card/ant-alert-card.component';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  cardList: AlertRecordEntity[] = [{
		"id": 225,
		"serial": "1fb06d46b6816c4b7f6690931dbb0d9b",
		"alertname": "CriticalGDCEmailAlert",
		"severity": "critical",
		"owner": "gdc",
		"status": "firing",
		"starts_at": "2023-08-04T08:48:17.961Z",
		"ends_at": "0001-01-01T00:00:00.000Z",
		"fingerprint": "8c0bc18c1c6e432e",
		"summary": "Multiple occurrences of GDCEmailAlert",
		"description": null
	},
	{
		"id": 224,
		"serial": "bba174d9b5daf6b1c87788b9be68e921",
		"alertname": "HighGDCEmailAlert",
		"severity": "high",
		"owner": "gdc",
		"status": "resolved",
		"starts_at": "2023-08-04T08:18:17.961Z",
		"ends_at": "2023-08-04T08:48:17.961Z",
		"fingerprint": "330eb199c6281a12",
		"summary": "Third occurrence of GDCEmailAlert",
		"description": null
	},
	{
		"id": 223,
		"serial": "15bad624c98b2afc7c2a8d348f20a2a6",
		"alertname": "MediumGDCEmailAlert",
		"severity": "medium",
		"owner": "gdc",
		"status": "resolved",
		"starts_at": "2023-08-04T07:18:17.961Z",
		"ends_at": "2023-08-04T08:18:17.961Z",
		"fingerprint": "8caacbeaa723fc02",
		"summary": "Second occurrence of GDCEmailAlert",
		"description": null
	},
	{
		"id": 215,
		"serial": "3ec001ed5000345e47c3899cc4b2e6ac",
		"alertname": "CriticalGDCEmailAlert",
		"severity": "critical",
		"owner": "gdc",
		"status": "resolved",
		"starts_at": "2023-08-04T00:50:17.961Z",
		"ends_at": "2023-08-04T00:55:17.961Z",
		"fingerprint": "8c0bc18c1c6e432e",
		"summary": "Multiple occurrences of GDCEmailAlert",
		"description": null
	},
	{
		"id": 210,
		"serial": "3271eb51996041e09b8c10d187fc4a91",
		"alertname": "CriticalGDCEmailAlert",
		"severity": "critical",
		"owner": "gdc",
		"status": "firing",
		"starts_at": "2023-08-03T12:39:17.961Z",
		"ends_at": "0001-01-01T00:00:00.000Z",
		"fingerprint": "8c0bc18c1c6e432e",
		"summary": "Multiple occurrences of GDCEmailAlert",
		"description": null
	},
	{
		"id": 209,
		"serial": "ff01dc24de3965e0ba4831765160c4c5",
		"alertname": "HighGDCEmailAlert",
		"severity": "high",
		"owner": "gdc",
		"status": "resolved",
		"starts_at": "2023-08-03T12:09:17.961Z",
		"ends_at": "2023-08-03T12:39:17.961Z",
		"fingerprint": "330eb199c6281a12",
		"summary": "Third occurrence of GDCEmailAlert",
		"description": null
	},
	{
		"id": 208,
		"serial": "78dcab6cdc19c2ed721a96801306dca6",
		"alertname": "MediumGDCEmailAlert",
		"severity": "medium",
		"owner": "gdc",
		"status": "resolved",
		"starts_at": "2023-08-03T11:09:17.961Z",
		"ends_at": "2023-08-03T12:09:17.961Z",
		"fingerprint": "8caacbeaa723fc02",
		"summary": "Second occurrence of GDCEmailAlert",
		"description": null
	},
	{
		"id": 169,
		"serial": "4956aee41a0e8df4af2cb3c38010bdef",
		"alertname": "CriticalGDCEmailAlert",
		"severity": "critical",
		"owner": "gdc",
		"status": "resolved",
		"starts_at": "2023-07-20T02:27:20.397Z",
		"ends_at": "2023-07-24T05:47:20.397Z",
		"fingerprint": "08d53a411113a8b6",
		"summary": "Multiple occurrences of GDCEmailAlert",
		"description": null
	},
	{
		"id": 170,
		"serial": "bff0562b3bc2aef18fe41a4ec6b77385",
		"alertname": "HighGDCEmailAlert",
		"severity": "high",
		"owner": "gdc",
		"status": "resolved",
		"starts_at": "2023-07-20T02:27:20.397Z",
		"ends_at": "2023-07-24T05:47:20.397Z",
		"fingerprint": "377c6fc946656ab4",
		"summary": "Third occurrence of GDCEmailAlert",
		"description": null
	},
	{
		"id": 167,
		"serial": "c099825950e2b834b20f563326cf841b",
		"alertname": "CriticalGDCEmailAlert",
		"severity": "critical",
		"owner": "gdc",
		"status": "firing",
		"starts_at": "2023-07-18T06:47:50.397Z",
		"ends_at": "0001-01-01T00:00:00.000Z",
		"fingerprint": "08d53a411113a8b6",
		"summary": "Multiple occurrences of GDCEmailAlert",
		"description": null
	}
]

  constructor() { }

  ngOnInit() {
  }

}
