import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AntNotificationRuleModalComponent } from './ant-notification-rule-modal.component';

describe('AntNotificationRuleModalComponent', () => {
    let component: AntNotificationRuleModalComponent;
    let fixture: ComponentFixture<AntNotificationRuleModalComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                AntNotificationRuleModalComponent,
                FormsModule,
                ReactiveFormsModule,
                NzModalModule,
                NzFormModule,
                NzSelectModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AntNotificationRuleModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should enable "OK" button when form is valid', () => {
        // Simulate valid form state
        component.parentForm.patchValue({
            routeName: 'Test Route',
            matcherForms: [{ labelName: 'Label 1', operator: '=', labelValue: 'Value 1' }],
            receiverForms: [{ selectedValue: 'receiver_uid_1' }]
        });

        fixture.detectChanges();
        expect(component.nzOkDisabled).toBe(false);
    });

    it('should disable "OK" button when form is invalid', () => {
        // Simulate invalid form state
        component.parentForm.patchValue({
            routeName: '',
            matcherForms: [{ labelName: '', operator: '', labelValue: '' }],
            receiverForms: [{ selectedValue: '' }]
        });

        fixture.detectChanges();
        expect(component.nzOkDisabled).toBe(true);
    });

    it('should emit formValueChange event on OK button click', () => {
        const emitSpy = spyOn(component.formValueChange, 'emit');
        const validFormData = {
            routeName: 'Test Route',
            matcherForms: [{ labelName: 'Label 1', operator: '=', labelValue: 'Value 1' }],
            receiverForms: [{ selectedValue: 'email|receiver_uid_1' }]
        };

        component.parentForm.patchValue(validFormData);
        component.handleOk();

        expect(emitSpy).toHaveBeenCalled();
        expect(emitSpy).toHaveBeenCalledWith({
            id: undefined,
            route_name: 'Test Route',
            alertmanagerRouteMatchers: [
                { label_name: 'Label 1', operator: '=', label_value: 'Value 1' }
            ],
            alertmanagerRouteMapReceivers: [{
                receiver_type: 'email',
                receiver_uid: 'receiver_uid_1'
            }]
        });

    });

    it('should emit isVisibleChange event on Cancel button click', () => {
        spyOn(component.isVisibleChange, 'emit');

        component.handleCancel();

        expect(component.isVisibleChange.emit).toHaveBeenCalledWith(false);
    });
});
