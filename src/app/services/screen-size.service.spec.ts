import { TestBed } from '@angular/core/testing';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { ScreenSizeService } from './screen-size.service';

describe('ScreenSizeService', () => {
  let viewportRulerSpy: jasmine.SpyObj<ViewportRuler>;

  beforeEach(() => {
    viewportRulerSpy = jasmine.createSpyObj('ViewportRuler', ['getViewportSize']);

    TestBed.configureTestingModule({
      providers: [
        ScreenSizeService,
        { provide: ViewportRuler, useValue: viewportRulerSpy }
      ]
    });
  });

  it('should initialize with correct screen size', () => {
    // 设置模拟对象的返回值
    viewportRulerSpy.getViewportSize.and.returnValue({ width: 800, height: 600 });

    const screenSizeService = TestBed.inject(ScreenSizeService);

    expect(screenSizeService.isScreenSmall()).toBe(false);
  });
});
