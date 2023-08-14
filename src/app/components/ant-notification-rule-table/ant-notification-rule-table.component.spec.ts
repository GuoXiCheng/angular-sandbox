import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntNotificationRuleTableComponent } from './ant-notification-rule-table.component';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { By } from '@angular/platform-browser';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


describe('AntNotificationRuleTableComponent', () => {
  let component: AntNotificationRuleTableComponent;
  let fixture: ComponentFixture<AntNotificationRuleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AntNotificationRuleTableComponent, FormsModule, NzTableModule, NzButtonModule, NzCheckboxModule, NzIconModule.forRoot(icons)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntNotificationRuleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render buttons correctly based on disabledAllCheckbox', () => {
    component.disabledAllCheckbox = true;
    fixture.detectChanges();
    
    const editEnableButton = fixture.debugElement.query(By.css('button'));
    const editEnableButtonText = editEnableButton.nativeElement.textContent.trim();
    expect(editEnableButtonText).toContain('編輯');
    
    const saveEnabledButton = fixture.debugElement.query(By.css('button'));
    const saveEnabledButtonText = saveEnabledButton.nativeElement.textContent.trim();
    expect(saveEnabledButtonText).not.toContain('儲存');
    
    component.disabledAllCheckbox = false;
    fixture.detectChanges();
    
    const addButton = fixture.debugElement.queryAll(By.css('button[nz-button]'))[1];
    const addButtonText = addButton.nativeElement.textContent.trim();
    expect(addButtonText).toContain('通知規則');
    
  });

  it('should emit events when buttons are clicked', () => {
    spyOn(component.editRuleEvent, 'emit');
    spyOn(component.addRuleEvent, 'emit');
    spyOn(component.saveEnabledEvent, 'emit');
    spyOn(component.disabledAllCheckboxChange, 'emit');

    const editEnableButton = fixture.debugElement.queryAll(By.css('button[nz-button]'))[0];
    editEnableButton.triggerEventHandler('click', null);
    expect(component.disabledAllCheckboxChange.emit).toHaveBeenCalledWith(false);

    const addButton = fixture.debugElement.queryAll(By.css('button[nz-button]'))[1];
    addButton.triggerEventHandler('click', null);
    expect(component.addRuleEvent.emit).toHaveBeenCalled();
  });
});
