import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableDataSourcePaginator, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-forest-green-table',
  standalone: true,
  templateUrl: './forest-green-table.component.html',
  styleUrls: ['./forest-green-table.component.css'],
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
})
export class ForestGreenTableComponent<T> implements AfterViewInit {
  @Input() columnHeader: Array<{key: string, value: string}> = []

  @Input() data: Array<T> = [];

  dataSource: MatTableDataSource<T, MatTableDataSourcePaginator> = new MatTableDataSource<T>(this.data);
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<T>(this.data);
    this.dataSource.paginator = this.paginator;
    this.displayedColumns = this.columnHeader.map(item=>(item.key));
  }
}