import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule  }  from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { SQLDataService } from '../data.service';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sql-radio-group',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, 
    MatInputModule, MatOptionModule, MatSelectModule, MatRadioModule],
  templateUrl: './sql-radio-group.component.html',
  styleUrls: ['./sql-radio-group.component.css']
})
export class SqlRadioGroupComponent implements OnInit, AfterViewInit, OnDestroy  {

  value: any='';
  fieldData: any = '';
  myObs!: Subscription;
  myDataObs!: Subscription;
  row_value: any;
  col_value: any;

  favoriteSeason: any;

  @Input() appearance: string = 'outline';
  @Input() inline: string = 'N';
  @Input() native: any = 'Y';
  @Input() sql: string = '';
  @Input() handler: string = '';
  @Input() col: string = '';
  @Input() data: any;
  @Input() class: any = '';
  @Input() style: any = '';
  @Input() id: any = '';
  @Input() id2: any = '';
  @Input() id3: any = '';
  @Input() hint: string = '';
  @Input() icon: string = '';
  @Input() label: string = 'Label not set';
  @Input() placeholder: any = '';
  @Input() bs_row: any = 'Y';
  @Input() bs_col: any = 'col-12';
  @Input() top_label: any = 'N';
  selectData: any;
  counter: number = 0;
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();  
  parameters: any = { page: '', id: '', id2: '', id3: ''};
  
  formData: any;
  constructor(private _dataService: SQLDataService) { 
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.fieldData = this.data;
      this.value = this.fieldData[this.col];
      this.counter++;
    })
  }

  ngAfterViewInit() {
    this.parameters.id=this.id;
    this.parameters.id2=this.id2;
    this.parameters.id3=this.id3;
    this.myDataObs = this._dataService.getSelect(this.sql, this.parameters).subscribe((data:any)=>{
      this.selectData=data;
    });
  }

  ngOnInit(): void {
    if (this.bs_col=='Y') {
     this.row_value='row';
    } else {
     this.row_value='none';
    }
    if (this.bs_col!='') {
     this.col_value=this.bs_col;
    } else {
     this.col_value='none';
    }
  }

  handleChange() {
    this.fieldData['submit']='N';
    this.fieldData[this.col]=this.value;

    this._dataService.pushNotification(this.fieldData);
 }

 ngOnDestroy(): void {
  this.myObs.unsubscribe();
  this.myDataObs.unsubscribe();
}
}
