import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AntNotificationModeModalComponent } from './ant-notification-mode-modal.component';

describe('AntNotificationModeModalComponent', () => {
  let component: AntNotificationModeModalComponent;
  let fixture: ComponentFixture<AntNotificationModeModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule, NzModalModule, BrowserAnimationsModule,AntNotificationModeModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntNotificationModeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases here based on your component's functionality
  // For example, test modal visibility, form initialization, form controls behavior, etc.

  it('should disable submit button when form is invalid', () => {
    component.parentForm.controls['notificationMode'].setValue('email');
    component.parentForm.controls['receiverName'].setValue('Test Receiver');
    component.parentForm.controls['emailFrom'].setValue('invalid-email'); // Invalid email

    fixture.detectChanges();

    expect(component.nzOkDisabled).toBe(true);
  });

});
