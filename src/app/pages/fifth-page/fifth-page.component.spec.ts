/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FifthPageComponent } from './fifth-page.component';

describe('FifthPageComponent', () => {
  let component: FifthPageComponent;
  let fixture: ComponentFixture<FifthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
