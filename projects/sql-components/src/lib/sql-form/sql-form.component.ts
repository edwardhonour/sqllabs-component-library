import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild, ElementRef, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service';
import { MatCommonModule } from '@angular/material/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sql-form',
  standalone: true,
  imports: [CommonModule, MatCommonModule],
  templateUrl: './sql-form.component.html',
  styleUrls: ['./sql-form.component.css']
})
export class SqlFormComponent implements OnInit, DoCheck, OnChanges, AfterViewInit, OnDestroy  {

  last_id: any = '';
  myObs!: Subscription;

  constructor(private _dataService: SQLDataService) {
      
    this.myObs = this._dataService.dataSubject.subscribe(d => {
        this.data=d;
        this.counter++;
        console.log('sql-form' + this.counter)
        if (this.data.id!=this.last_id) {
          this.last_id=this.data.id;
          this.id=this.data.id;
          this.ngAfterViewInit();
        }
        if (this.data.submit==='Y') {
          this.postSQL();
        }
        console.log(d)
      })
   }

  //-- Inputs
  @Input() data: any;                                     // Depreciated
  @Input() id: any = '0';                                 // Primary key for an existing record = 0=Insert
  @Input() table: any = "dual";                           // Name of the base table.
  @Input() embedded: any = "N";                           // Is the form embedded in a list.
  @Input() card: any = "Y";                               // Show the form in a card Y/N
  @Input() closable: any = "N";                           // Is the form closable Y/N
  @Input() open: any = "Y";                               // Does a closable form start open.
  @Input() class: any = "";                               // Class for the form container.
  @Input() style: any = "";                               // Style for the form container.
  @Input() title: any = "";                               // Title of the form.
  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   // What bootstrap columns.
  @Input() handler: any = 'default';                      // what handler is used to process the form.

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() saved: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  showErrorAlert: any = 'N';
  errorMessage: any = 'Post Failed'
  showSuccessAlert: any = 'N';
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      if (this.embedded=='Y') {
        this.id==this.data.id;
      }
      this._dataService.getForm(this.table, this.id).subscribe((data:any)=>{
        this.data=data;
        console.log('pushing first query')
        this._dataService.pushNotification(this.data);
      });
  }

  postSQL() {
    this._dataService.postSQL(this.data).subscribe((data:any)=>{
      if (data.error_code=="0") { 
        this.showSuccessAlert='Y';
        this.showErrorAlert='N';
        this.errorMessage='Record Saved';
      } else {
        this.showSuccessAlert='N';
        this.showErrorAlert='Y';
        this.errorMessage=data.error_message;
        this.errorMessage='Record Saved';
      }
      
      setTimeout(()=>{
        this.showErrorAlert='N';
        this.showSuccessAlert='N';
        this.data.refresh='Y';
        this.data.submit='N';
        this._dataService.pushNotification(data);
      },1000);

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