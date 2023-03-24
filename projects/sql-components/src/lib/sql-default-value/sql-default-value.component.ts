import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule  }  from '@angular/material/icon';
import { SQLDataService } from '../data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'sql-default-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-default-value.component.html',
  styleUrls: ['./sql-default-value.component.css']
})
export class SqlDefaultValueComponent implements AfterViewInit, OnDestroy {

  @Input() col: any = '';
  @Input() value: any = '';

  myObs!: Subscription;
  data: any;

  formData: any;
  constructor(private _dataService: SQLDataService) { 
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
    })
  }

  ngAfterViewInit(): void {
    console.log('sql-default-value')
    console.log(this.value)
    console.log(this.col)
    setTimeout(() => {
        this.data[this.col]=this.value;
        console.log('sql-default-value: timer')
        console.log(this.data)
        this._dataService.dataSubject.next(this.data);
    },1000);
  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }

}
