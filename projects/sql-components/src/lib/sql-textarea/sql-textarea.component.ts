import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, DoCheck, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule  }  from '@angular/material/icon';
import { SQLDataService } from '../data.service'; 
import { Subscription } from 'rxjs';


@Component({
  selector: 'sql-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './sql-textarea.component.html',
  styleUrls: ['./sql-textarea.component.css']
})
export class SqlTextareaComponent implements OnInit, AfterViewInit, OnDestroy  {

  value: any='';
  fieldData: any = '';
  myObs!: Subscription;

  @Input() rows: any = '5';
  @Input() maxrows: any = '10';
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
  counter: number = 0;
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();  
  
  ngAfterViewInit() {

  }

  formData: any;
  constructor(private _dataService: SQLDataService) { 
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.fieldData = this.data;
      this.value = this.fieldData[this.col];
      this.counter++;
    })
  }

  ngOnInit(): void {

  }


  handleChange() {
     this.fieldData['submit']='N';
     this.fieldData[this.col]=this.value;
     this._dataService.pushNotification(this.fieldData);
  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }
}