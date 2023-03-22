import { Component, OnInit, Input, Output, EventEmitter, OnDestroy,
  ContentChildren, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sql-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-menu.component.html',
  styleUrls: ['./sql-menu.component.css']
})
export class SqlMenuComponent implements OnInit, AfterViewInit, OnDestroy  {
  // 
  @ContentChildren('title') private title_list!: ElementRef;
  @ContentChildren('row') private row_list!: ElementRef[];
  myObs!: Subscription;
  myDataObs!: Subscription;
  
  // format: is built from ContentChildren and Input Parameters
  format: any = { title: '', search: '', class: '', style: '', columns: [], buttons: [] };
  list: any[] = [];          

  
  row_placeholder: any = 'row';
  col_placeholder: any = 'col-12';
  
  //-- Inputs
  @Input() title: any = '';                               // title of the page.
  @Input() use_parameters = 'N';
  @Input() data: any = '';                                // Use Data if data comes from function.
  @Input() card: any = "Y";                               // Show the form in a card Y/N
  @Input() card_class: any = '';
  @Input() card_style: any = '';
  @Input() container_class: any = 'container-fluid m-2 p-2';              // Class of the outer ng-container.
  @Input() container_style: any = '';                     // Style of the outer ng-container.  
  @Input() search: any = 'TOP';                           // Location of the search box.
  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-12 col-xl-12';   // What bootstrap columns.
  @Input() table_class: any = 'table table-striped table-condensed';   // class of the table.
  @Input() table_style: any = '';                                      // style of the table.
  @Input() edit: any = 'Y';                               // Add custom edit button.
  @Input() pagination: any = 'Y';                         // Include pagination.
  @Input() pagesize: number = 25;                         // rows per page for pagination.
  @Input() id: any = '0';                                 // id for where clause.
  @Input() open: any = "Y";                               // Does a closable list start open.
  @Input() class: any = 'table table-striped table-condensed';  // Class for the table container.
  @Input() style: any = "";                               // Style for the table container.
  @Input() handler: any = 'default';                      // what handler is used to process the form.
  @Output() menuClick: EventEmitter<any> = new EventEmitter<any>();
  
  counter: number = 0;
  
  constructor(private _dataService: SQLDataService) {     
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
    })
  }
  
  ngOnInit(): void {
  this.format.search='Y';
  }
  

  processClick(m: any) {
    this.list.forEach((e: any)=> {
      e.active='N';
    } );
    m.active='Y';
    console.log('sql_menu');
    console.log(m)
    this.menuClick.emit(m);
  }
  
  ngAfterViewInit(): void {
  
  this.format.title=this.title;
  this.format.class=this.class;
  this.format.style=this.style;
  this.format.pagination=this.pagination;
  this.format.pagesize=this.pagesize;
  if (this.bs_row=='Y') {
      this.row_placeholder="row";
  } else {
      this.row_placeholder="none";
  }
  this.col_placeholder=this.bs_col;
console.log(this.row_list);

  this.row_list.forEach((e: ElementRef) => {
  
       let template: any = { title: '',  class: '',  id: '',  style: '', active: 'N' };
       
       if (e.nativeElement.nodeName=='LI') {
            template.id=e.nativeElement.id;
            template.title=e.nativeElement.innerHTML;
       }      
       if (e.nativeElement.className!==undefined) { template.class=e.nativeElement.className; }
       template.style=e.nativeElement.style.cssText;
       this.list.push(template);
  });
  
  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
    this.myDataObs.unsubscribe();
  }
  }