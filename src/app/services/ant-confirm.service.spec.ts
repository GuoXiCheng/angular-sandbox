// ant-confirm.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { AntConfirmService } from './ant-confirm.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('AntConfirmService', () => {

  let service: AntConfirmService;
  let modalServiceSpy: jasmine.SpyObj<NzModalService>;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {

    // 创建 onLangChange 的 stub
    const onLangChangeStub = {
      pipe: () => ({
        subscribe: () => {}
      })
    };

    // 创建 spy 对象时把 stub 传进去
    modalServiceSpy = jasmine.createSpyObj('NzModalService', ['confirm']);
    translateServiceSpy = jasmine.createSpyObj('TranslateService', ['get'], {
      onLangChange: onLangChangeStub
    });

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: NzModalService, useValue: modalServiceSpy },
        TranslateService
      ]
    });
    
    service = TestBed.inject(AntConfirmService);

  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call modal.confirm on success', () => {
    service.success({ title: 'confirm_to_submit' });

    expect(modalServiceSpy.confirm).toHaveBeenCalledWith(
      {
        nzTitle: undefined,
        nzOnOk: jasmine.any(Function),
        nzOnCancel: jasmine.any(Function),
        nzOkText: undefined,
        nzCancelText: undefined
      },
      'success'
    );
  });
});