import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntSideBarComponent } from './ant-side-bar.component';
import { CommonModule } from '@angular/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import dayjs from 'dayjs';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };
  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
  

describe('AntSideBarComponent', () => {
  let component: AntSideBarComponent;
  let fixture: ComponentFixture<AntSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AntSideBarComponent,CommonModule, NzButtonModule, NzIconModule.forRoot(icons), NzBadgeModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit upEvent when clicking up button', () => {
    spyOn(component.upEvent, 'emit');
    component.clickUpBtn();
    expect(component.upEvent.emit).toHaveBeenCalledWith(component.currentDate);
  });

  it('should emit downEvent when clicking down button', () => {
    spyOn(component.downEvent, 'emit');
    component.today = dayjs().subtract(1, 'day');
    component.clickDownBtn();
    expect(component.downEvent.emit).toHaveBeenCalledWith(component.currentDate);
  });

  it('should set ngStyle width correctly based on isExpand', () => {
    component.isExpand = true;
    fixture.detectChanges();
    const containerElement = fixture.nativeElement.querySelector('.container');
    expect(containerElement.style.width).toBe('16.5rem');
  });
});
