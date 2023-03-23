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
  @Input() data: any;                                     
  @Input() id: any = '0';                                
  @Input() table: any = "dual";                           
  @Input() embedded: any = "N";                          
  @Input() card: any = "Y";                               
  @Input() closable: any = "N";                           
  @Input() open: any = "Y";                               
  @Input() class: any = "";                              
  @Input() style: any = "";                              
  @Input() title: any = "";                              
  @Input() bs_row: any = 'Y';                             
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   
  @Input() handler: any = 'default';                      

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