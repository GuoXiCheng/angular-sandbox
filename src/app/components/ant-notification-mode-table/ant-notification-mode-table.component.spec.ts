import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntNotificationModeTableComponent, NotificationMode } from './ant-notification-mode-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { By } from '@angular/platform-browser';

describe('AntNotificationModeTableComponent', () => {
  let component: AntNotificationModeTableComponent;
  let fixture: ComponentFixture<AntNotificationModeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AntNotificationModeTableComponent, NzTableModule, NzIconModule, NzButtonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntNotificationModeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rows with correct data', () => {
    const testNotificationModes: NotificationMode[] = [
      {
        id: 1,
        receiver_type: 'Type 1',
        receiver_name: 'Name 1',
        update_by: 'User 1',
        update_time: '2023-08-14',
      },
      // Add more test data as needed
    ];

    component.database = testNotificationModes;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    expect(rows.length).toBe(testNotificationModes.length);

    rows.forEach((row, index) => {
      const rowData = testNotificationModes[index];
      const cells = row.queryAll(By.css('td'));

      expect(cells[0].nativeElement.textContent).toContain(rowData.receiver_type);
      expect(cells[1].nativeElement.textContent).toContain(rowData.receiver_name);
      expect(cells[2].nativeElement.textContent).toContain(rowData.update_by);
      expect(cells[3].nativeElement.textContent).toContain(rowData.update_time);
    });
  });

  it('should emit editBtnEvent when edit button is clicked', () => {
    const testNotificationMode: NotificationMode = {
      id: 1,
      receiver_type: 'Type 1',
      receiver_name: 'Name 1',
      update_by: 'User 1',
      update_time: '2023-08-14',
    };

    component.database = [testNotificationMode];
    fixture.detectChanges();

    const editButton = fixture.debugElement.query(By.css('a[nz-button]'));
    spyOn(component.editBtnEvent, 'emit');

    editButton.triggerEventHandler('click', null);

    expect(component.editBtnEvent.emit).toHaveBeenCalledWith(testNotificationMode);
  });
});
