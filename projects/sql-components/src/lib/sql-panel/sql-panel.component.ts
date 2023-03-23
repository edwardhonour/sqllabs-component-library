import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, ViewChild, ElementRef, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sql-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sql-panel.component.html',
  styleUrls: ['./sql-panel.component.css'],
})
export class SqlPanelComponent implements OnInit, DoCheck, OnChanges, AfterViewInit, OnDestroy  {
  
  //-- Inputs
  @Input() use_parameters: any = 'N';                             // does data come from Router.
  @Input() data: any;                                     // Depreciated
  @Input() sql: any = "select 'x' from dual";             // query to populate panel.          
  @Input() id: any = '0';                                 // Primary key for query.
  @Input() id2: any = '0'; 
  @Input() id3: any = '0'; 
  @Input() card: any = "Y";                               // Show the panel in a card Y/N
  @Input() closable: any = "N";                           // Is the panel closable Y/N
  @Input() open: any = "Y";                               // Does a closable form start open.
  @Input() class: any = "";                               // Class for the panel container.
  @Input() style: any = "";                               // Style for the panel container.
  @Input() title: any = "";                               // Title of the Panel.
  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   // What bootstrap columns.
  myObs!: Subscription;
  myDatgaObs!: Subscription;

  r: any;
  path: any;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  public parameterValue: string = '';

  constructor(private _dataService: SQLDataService, 
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }
      
  ngAfterViewInit() {
    this.myObs = this._dataService.getSQL(this.sql, this.id).subscribe((data:any)=>{
        this.data=data;
        console.log(this.data)
        this._dataService.pageSubject.next(this.data[0]);
     });
  }
  
  ngDoCheck(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }
}
