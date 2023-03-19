import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule  }  from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { DataService } from '../data.service'; 
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'sql-select',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, 
    MatInputModule, MatOptionModule, MatSelectModule],
  templateUrl: './sql-select.component.html',
  styleUrls: ['./sql-select.component.css']
})
export class SqlSelectComponent implements OnInit, AfterViewInit {

  value: any='';
  fieldData: any = '';

  @Input() appearance: string = 'fill';
  @Input() native: any = 'Y';
  @Input() sql: string = '';
  @Input() handler: string = '';
  @Input() col: string = '';
  @Input() data: any;
  @Input() class: any = '';
  @Input() style: any = '';
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
  
  formData: any;
  constructor(private _dataService: DataService) { 
    this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.fieldData = this.data;
      this.value = this.fieldData[this.col];
      this.counter++;
      console.log('sql-select: ' + this.counter)
      console.log(d)
    })
  }

  ngAfterViewInit() {
    this._dataService.getSelect(this.sql, this.handler, this.fieldData).subscribe((data:any)=>{
      this.selectData=data;
    });
  }

  ngOnInit(): void {

  }


  handleChange() {
     console.log('sql-select change')
     this.fieldData['submit']='N';
     this.fieldData[this.col]=this.value;
     console.log('sql-select')
     this._dataService.pushNotification(this.fieldData);
  }

}
