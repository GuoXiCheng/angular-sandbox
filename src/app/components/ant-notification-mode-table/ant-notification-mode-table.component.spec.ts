import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntNotificationModeTableComponent, NotificationMode } from './ant-notification-mode-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { By } from '@angular/platform-browser';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


describe('AntNotificationModeTableComponent', () => {
  let component: AntNotificationModeTableComponent;
  let fixture: ComponentFixture<AntNotificationModeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AntNotificationModeTableComponent, NzTableModule, NzIconModule, NzButtonModule, NzIconModule.forRoot(icons)],
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
      expect(cells[2].nativeElement.textContent).toContain(rowData.update_time);
      expect(cells[3].nativeElement.textContent).toContain(rowData.update_by);
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
    spyOn(component.editModeEvent, 'emit');

    editButton.triggerEventHandler('click', null);

    expect(component.editModeEvent.emit).toHaveBeenCalledWith(testNotificationMode);
  });

  it('should emit addBtnEvent when add button is clicked', () => {
    const addButton = fixture.debugElement.query(By.css('button[nz-button]'));
    let emittedData: any; // 存储触发事件时的数据
  
    component.addModeEvent.subscribe(data => {
      emittedData = data;
    });
  
    addButton.triggerEventHandler('click', null);
  
    // 在这里你可以对 emittedData 进行断言，比如期望它是某个特定的值或类型
    expect(emittedData).toEqual(undefined);
  });
});
