import { Component, OnInit, Input, Output, EventEmitter, 
 AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldAppearance, MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule  }  from '@angular/material/icon';
import { SQLDataService } from '../data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { Subscription } from 'rxjs';
   
export const MY_DATE_FORMATS = {
    parse: {
      dateInput: 'MM/DD/YYYY',
    },
    display: {
      dateInput: 'MM/DD/YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    },
};

@Component({
  selector: 'sql-datepicker',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MomentDateModule, 
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  templateUrl: './sql-datepicker.component.html',
  styleUrls: ['./sql-datepicker.component.css'],
  providers: [
    DatePipe,
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

  ]
})
export class SqlDatepickerComponent  implements OnInit, AfterViewInit, OnDestroy {

  @Input() col: string = '';
  @Input() data: any;
  @Input() class: any = '';
  @Input() style: any = '';
  @Input() hint: string = '';
  @Input() icon: string = '';
  @Input() label: string = 'Label not set';
  @Input() placeholder: any = '';
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() bs_row: any = 'Y';
  @Input() bs_col: any = 'col-12';
  @Input() top_label: any = 'N';
  counter: number = 0;
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();  

  row_value: any;
  col_value: any;

  events: string[] = [];
  fieldData: any;
  value: any;
  myObs!: Subscription;

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  ngAfterViewInit() {
  
  }

  formData: any;
  constructor(private _dataService: SQLDataService, private datePipe: DatePipe) { 
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.fieldData = this.data;
      this.value = this.fieldData[this.col];
      this.counter++;
    })
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
     this.fieldData[this.col]=this.datePipe.transform(this.value, 'yyyy-MM-dd');
     this._dataService.pushNotification(this.fieldData);
  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }
}

