import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule  }  from '@angular/material/icon';
import { SQLDataService } from '../data.service';
import { Subscription } from 'rxjs';
import { MatPseudoCheckbox } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'sql-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  templateUrl: './sql-checkbox.component.html',
  styleUrls: ['./sql-checkbox.component.css']
})
export class SqlCheckboxComponent implements OnInit, AfterViewInit, OnDestroy  {

  value: any='';
  value2: any=false;
  fieldData: any = '';
  myObs!: Subscription;

  @Input() col: string = '';
  @Input() data: any;
  @Input() class: any = '';
  @Input() style: any = '';
  @Input() hint: string = '';
  @Input() icon: string = '';
  @Input() label: string = 'Label not set';
  @Input() placeholder: any = '';
  @Input() appearance: string = 'outline';
  @Input() bs_row: any = 'Y';
  @Input() bs_col: any = 'col-12';
  @Input() top_label: any = 'N';
  @Input() labelPosition: any = 'before';
  @Input() indeterminate = false;

  bs_row_value: any = 'row';
  bs_col_value: any = 'col-12';

  counter: number = 0;
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();  
  
  ngAfterViewInit() {
    if (this.bs_row=='Y') {
      this.bs_row_value="row";
    } else {
      this.bs_row_value='none';
    }
    if (this.bs_col!='') {
      this.bs_col_value=this.bs_col;
    } else {
      this.bs_col_value='none';
    }
  }

  formData: any;
  
  constructor(private _dataService: SQLDataService) { 
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.fieldData = this.data;
      this.value = this.fieldData[this.col];
      if (this.value=='Y') {
        this.value2=true;
      } else {
        this.value2=false;
      }
      this.counter++;
    })
  }

  ngOnInit(): void {

  }

  handleChange() {
     this.fieldData['submit']='N';
     if (this.value2==true) {
        this.value='Y';
      } else {
        this.value='N';
     }
     this.fieldData[this.col]=this.value;
     this._dataService.pushNotification(this.fieldData);
  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }
}
