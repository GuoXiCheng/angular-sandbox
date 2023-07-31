import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-forest-green-table',
  standalone: true,
  templateUrl: './forest-green-table.component.html',
  styleUrls: ['./forest-green-table.component.css'],
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
})
export class ForestGreenTableComponent<T> implements OnChanges {

  @Input() data: Array<T> = [];

  @Input() columns: Array<{ columnDef: string, header: string, cell: (element: T) => string }> = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource<T>(this.data);
      this.dataSource.paginator = this.paginator;
    }

    if (changes['columns']) {
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }
  }

  dataSource = new MatTableDataSource<T>(this.data);;
  displayedColumns = this.columns.map(c => c.columnDef);
}