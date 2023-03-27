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
  myDataObs!: Subscription;        // dataSubject contains form fields
  myContainerObs!: Subscription;   // containerSubject contains parameters modified by its container.
  containerParameters: any = { id: '', id2: '', id3: '' };

  //-- Inputs
  @Input() data: any;                                     
  @Input() id: any = '0';         
  @Input() id2: any = '0';         
  @Input() id3: any = '0';
  @Input() default_col: any = '';  
  @Input() default_col2: any = '';  
  @Input() default_col3: any = '';   
  @Input() default_value: any = '';  
  @Input() default_value2: any = '';
  @Input() default_value3: any = '';
  @Input() table: any = "dual";
  @Input() embedded: any = "Y";
  @Input() card: any = "Y";
  @Input() closable: any = "N";                           
  @Input() open: any = "Y";                               
  @Input() class: any = "";                              
  @Input() style: any = "";                              
  @Input() title: any = "";                              
  @Input() bs_row: any = 'Y';                             
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   
  @Input() handler: any = 'default';                      

  parameters: any = { page: '', id: '', id2: '', id3: ''};

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() saved: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  showErrorAlert: any = 'N';
  errorMessage: any = 'Post Failed'
  showSuccessAlert: any = 'N';

  constructor(private _dataService: SQLDataService) {
    // part of an edit table or container.
    /*
    if (this.embedded=='Y') {
      console.log('form constructor')
      this.myContainerObs = this._dataService.containerSubject.subscribe(d => {
        console.log('container parameters')
        console.log(d)
        this.containerParameters=d;
        if (this.containerParameters.id!=this.last_id) {
          this.last_id=this.containerParameters.id;
          this.id=this.containerParameters.id;
          if (this.containerParameters.id2!==undefined) { this.id2=this.containerParameters.id2; }
          if (this.containerParameters.id3!==undefined) { this.id3=this.containerParameters.id3; }
          this.ngAfterViewInit();
        }
      })
    }     
    this.myDataObs = this._dataService.dataSubject.subscribe(d => {
        console.log('data subject')
        this.data=d;
        if (this.data.id!=this.last_id) {
          this.last_id=this.data.id;
          this.id=this.data.id;
        }
        if (this.data.submit==='Y') {
          this.postSQL();
        }
      })
        */
   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      console.log('AVI')
      this.parameters.id=this.id;
      if (this.table!='dual') {
        this._dataService.getForm(this.table, this.parameters).subscribe((data:any)=>{
            this.data=data;
            if (this.default_col!='') { this.data[this.default_col]=this.default_value }
            if (this.default_col2!='') { this.data[this.default_col2]=this.default_value2 }        
            if (this.default_col3!='') { this.data[this.default_col3]=this.default_value3 }                
            this._dataService.pushNotification(this.data);
      });
    }
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
    this.myContainerObs.unsubscribe();
    this.myDataObs.unsubscribe();
  }
}