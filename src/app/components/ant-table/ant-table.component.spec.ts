import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntTableComponent, TableItem } from './ant-table.component';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AntTableComponent', () => {
  let component: AntTableComponent;
  let fixture: ComponentFixture<AntTableComponent>;
  let debugElement: DebugElement;

  const mockData: TableItem[] = [
    { name: 'Item 1', img: 'image1.jpg', desc: 'Description 1', heat: 'High' },
    { name: 'Item 2', img: 'image2.jpg', desc: 'Description 2', heat: 'Low' },
    // Add more mock data as needed
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AntTableComponent, CommonModule, NzTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntTableComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table rows based on input data', () => {
    component.database = mockData;
    fixture.detectChanges();

    const tableRows = debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toEqual(mockData.length);

    // Check the content of the first row
    const firstRow = tableRows[0];
    const cells = firstRow.queryAll(By.css('td'));
    expect(cells[0].nativeElement.textContent).toContain(mockData[0].name);
    expect(cells[2].nativeElement.textContent).toContain(mockData[0].desc);
    // Add similar expectations for other cell values
  });

  // Add more tests for different scenarios as needed
});
