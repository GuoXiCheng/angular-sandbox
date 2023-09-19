import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntToolbarComponent } from './ant-toolbar.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


describe('AntToolbarComponent', () => {
  let component: AntToolbarComponent;
  let fixture: ComponentFixture<AntToolbarComponent>;
  let screenSizeService: ScreenSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [ScreenSizeService],
      imports: [AntToolbarComponent, NzDividerModule, NzAvatarModule, NzDropDownModule, NzIconModule.forRoot(icons),]
    });

    fixture = TestBed.createComponent(AntToolbarComponent);
    component = fixture.componentInstance;
    screenSizeService = TestBed.inject(ScreenSizeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selectedGroup and selectedLanguage', () => {
    expect(component.selectedGroup).toEqual('gitlab'); // Assuming the first item is 'gitlab'
    expect(component.selectedLanguage).toEqual('简体中文'); // Assuming the first item is '简体中文'
  });

  it('should set isMobile based on screenSize service', () => {
    spyOn(screenSizeService, 'isScreenSmall').and.returnValue(true);
    component.ngOnInit();
    expect(component.isMobile).toBeTrue();
  });

  it('should handle clickGroupItem', () => {
    const groupItem = 'gdc';
    component.clickGroupItem(groupItem);
    expect(component.selectedGroup).toEqual(groupItem);
  });

  it('should handle clickLanguageItem', () => {
    const languageItem = 'ENGLISH';
    component.clickLanguageItem(languageItem);
    expect(component.selectedLanguage).toEqual(languageItem);
  });
});
