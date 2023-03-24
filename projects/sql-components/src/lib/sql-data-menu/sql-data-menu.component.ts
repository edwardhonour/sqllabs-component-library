import { Component, OnInit, Input, Output, EventEmitter, 
  ContentChildren, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sql-data-menu',
  standalone: true,
  imports: [CommonModule, 
    FormsModule],
  templateUrl: './sql-data-menu.component.html',
  styleUrls: ['./sql-data-menu.component.css']
})
export class SqlDataMenuComponent  implements OnInit, AfterViewInit {
  
  list: any;          // holds the list returned by the query.
  
  row_placeholder: any = 'row';
  col_placeholder: any = 'col-12';
  
  //-- Inputs
  @Input() function: any = '';                            // Use Function if data comes from a function in router.php
  @Input() sql: any = '';                                 // SQL that gets data 
  @Input() use_parameters: any = 'N';                     // If Y uses the paramSubject to get parameters.
  @Input() page: any = '';                                // page parameter, ignored if use_parameters = 'Y'.
  @Input() id: any = '0';                                 // id parameter, ignored if use_parameters = 'Y'.
  @Input() id2: any = '0';                                // id2 parameter, ignored if use_parameters = 'Y'.
  @Input() id3: any = '0';                                // id3 parameter, ignored if use_parameters = 'Y'.
  @Input() class: any = '';                               // class of the outer container.
  @Input() style: any = '';                               // style of the outer container.
  @Input() title: any = '';                               // title of the page.
  parameters: any = { page: '', id: '', id2: '', id3: ''};
  
  @Output() click: EventEmitter<any> = new EventEmitter<any>();
  
  counter: number = 0;
  
  constructor(private _dataService: SQLDataService) {     

  }
  
  ngOnInit(): void {

  }
  
  processClick(m: any) {
    this.list.forEach(function (value: any) {
      if (value.id==m.id) {
        value.active='Y';
      } else {
        value.active='N';
      }
    });
    this.click.emit(m);
  }
  
  ngAfterViewInit(): void {
    if (this.use_parameters=='Y') {
      this._dataService.paramSubject.subscribe(d => {
        this.parameters=d;
        this._dataService.getSQL(this.sql, this.parameters).subscribe((data:any)=>{
          this.list=data;
          this.list.forEach(function (value: any) {
            value.active='N';
          });
         });
      })
    } else {
        this.parameters.page=this.page;
        this.parameters.id=this.id;
        this.parameters.id2=this.id2;
        this.parameters.id3=this.id3;
        this._dataService.getMenu(this.sql, this.parameters).subscribe((data:any)=>{
          this.list=data;
          this.list.forEach(function (value: any) {
            value.active='N';
          });
         });
    }    
  }
  
}
  