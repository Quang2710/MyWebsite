import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements AfterViewInit {
  popularCourse:any[] = ['1','2','3','4','5','6','7','8','9','10'];
  constructor() {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
  }

  ScroolSoureList(){

  }
}




