import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertRecordEntity, AntAlertCardComponent } from './ant-alert-card.component';
import * as moment from 'moment';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

describe('AntAlertCardComponent', () => {
  let component: AntAlertCardComponent;
  let fixture: ComponentFixture<AntAlertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AntAlertCardComponent, NzCardModule, NzIconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntAlertCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate duration correctly', () => {
    const mockData: AlertRecordEntity = {
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
	};

    component.data = mockData;
    component.ngOnInit();

    // Calculate the expected duration based on mock data and moment.js
    const startsAt = moment(mockData.starts_at);
    const endsAt = moment(mockData.ends_at);
    const realEndsAt = endsAt.isAfter(startsAt) ? endsAt : moment();

    const duration = moment.duration(realEndsAt.diff(startsAt));
    const expectedDuration = `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m`;

    expect(component.cardData.duration).toBe(expectedDuration);
  });

});
