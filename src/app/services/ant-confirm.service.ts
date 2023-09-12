import { Injectable, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject, takeUntil } from 'rxjs';

const OPTIONAL_VALUE = ['confirm_to_submit', 'ok', 'cancel', 'confirm_to_delete'] as const;

type ModalValue = typeof OPTIONAL_VALUE[number];

export interface MyModalOption {
  title: ModalValue;
  ok?: Function;
  cancle?: Function;
}

@Injectable({
  providedIn: 'root'
})
export class AntConfirmService implements OnDestroy {

  private translatedTexts: { [key: string]: string } = {};
  private destroy$ = new Subject<void>();

  constructor(private modal: NzModalService, private translate: TranslateService) {
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.translate.get(OPTIONAL_VALUE.concat([])).subscribe(res => {
        this.translatedTexts = res;
      });
    });
  }

  success(option: MyModalOption) {
    this.modal.confirm({
      nzTitle: this.translatedTexts[option.title],
      nzOnOk: () => option.ok && option.ok(),
      nzOnCancel: () => option.cancle && option.cancle(),
      nzOkText: this.translatedTexts['ok'],
      nzCancelText: this.translatedTexts['cancel']
    }, 'success');
  }

  warning(option: MyModalOption) {
    this.modal.confirm({
      nzTitle: this.translatedTexts[option.title],
      nzOnOk: () => option.ok && option.ok(),
      nzOnCancel: () => option.cancle && option.cancle(),
      nzOkDanger: true,
      nzOkText: this.translatedTexts['ok'],
      nzCancelText: this.translatedTexts['cancel']
    }, 'warning');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
