import { Component, OnInit, Input, Output, EventEmitter, OnDestroy,
  ContentChildren, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule, PaginationComponent } from 'ngx-table-pagination';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sql-data-preview',
  standalone: true,
  imports: [CommonModule, 
    FormsModule,
    NgxTablePaginationModule, 
    Ng2SearchPipeModule],
  templateUrl: './sql-data-preview.component.html',
  styleUrls: ['./sql-data-preview.component.css']
})
export class SqlDataPreviewComponent implements OnInit, AfterViewInit, OnDestroy  {

@ContentChildren('row') private row_list!: ElementRef[];
myObs!: Subscription;
myDataObs!: Subscription;

format: any = { title: '', search: '', class: '', style: '', columns: [], buttons: [] };
list: any;          // holds the list returned by the query (2 columns [name, title]).

data: any = '';
@Input() use_parameters: any = 'N';
@Input() function: any = '';                           
@Input() sql: any = '';                             
@Input() card: any = "Y";      
@Input() card_class: any = '';
@Input() card_style: any = '';
@Input() container_class: any = 'container-fluid m-2 p-2';  
@Input() container_style: any = '';   

@Input() closable: any = "N";    
@Input() bs_row: any = 'N';                        
@Input() bs_col: any = '';   

@Input() list_class: any = 'table table-striped table-condensed';   
@Input() list_style: any = '';                                  
@Input() title: any = 'Title Not Set';               

@Input() id: any = '0';        
@Input() id2: any = '0';    
@Input() id3: any = '0';       

@Input() class: any = '';  
@Input() style: any = "";                            
          
@Output() row_click: EventEmitter<any> = new EventEmitter<any>();

parameters: any = { page: '', id: '', id2: '', id3: ''};
last_parameters: any = { page: 'xxx', id: 'xxx', id2: 'xxx', id3: 'xxx' }

counter: number = 0;
page: any = '';

constructor(private _dataService: SQLDataService) { 

}

ngOnInit(): void {

}

rowClick(m: any) {
  this.row_click.emit(m);
}

ngAfterViewInit(): void {

  if (this.use_parameters==='Y') {
    this._dataService.paramSubject.subscribe(d => {
      this.parameters=d;
      this._dataService.getSQL(this.sql, this.parameters).subscribe((data:any)=>{
        this.list=data;
        this.list.forEach(function (value: any) {
          value.active='N';
        });
       });
    })
  } 
  if (this.use_parameters==='N') {
      this.parameters.page=this.page;
      this.parameters.id=this.id;
      this.parameters.id2=this.id2;
      this.parameters.id3=this.id3;
      this._dataService.getSQL(this.sql, this.parameters).subscribe((data:any)=>{
        this.list=data;
        this.list.forEach(function (value: any) {
//          value.active='N';
        });
       });
  }

this.format.title=this.title;
this.format.class=this.class;
this.format.style=this.style;

this.row_list.forEach((e: ElementRef) => {
  
     let column_template: any = { column_name: '',  class: '',  type: '',  style: '',  title: '',  value: '' };
     
     if (e.nativeElement.nodeName=='TH') {
       column_template.type="data";
       column_template.value=e.nativeElement.id;
       column_template.title=e.nativeElement.innerHTML;
     }      
     
     if (e.nativeElement.nodeName=='TD') {      
       column_template.type="boilerplate";
       column_template.value='';
       column_template.title=e.nativeElement.innerHTML;
     }   

     if (e.nativeElement.className!==undefined) { column_template.class=e.nativeElement.className; }
     column_template.style=e.nativeElement.style.cssText;
     this.format.columns.push(column_template);
});


if (this.last_parameters.page!=this.parameters.page||
    this.last_parameters.id!=this.parameters.id||
    this.last_parameters.id2!=this.parameters.id2||
    this.last_parameters.id3!=this.parameters.id3) {
          this.last_parameters.page=this.parameters.page;
          this.last_parameters.id=this.parameters.id;
          this.last_parameters.id2=this.parameters.id2;
          this.last_parameters.id3=this.parameters.id3;

          this.myDataObs = this._dataService.getSQL(this.sql, this.parameters).subscribe((data:any)=>{
            if (data[0]!==undefined) { this.list=data[0]; }
          });
    }
}

tableRefresh() {
  this.myDataObs.unsubscribe();
  this.myDataObs = this._dataService.getSQL(this.sql, this.parameters).subscribe((data:any)=>{
      if (data[0]!==undefined) { this.list=data[0]; }
   });
}

ngOnDestroy(): void {
  this.myObs.unsubscribe();
  this.myDataObs.unsubscribe();
}
}