import { Component, OnInit, Input, Output, EventEmitter,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 
import { Subject, Subscription } from 'rxjs';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SqlDialogComponent } from '../sql-dialog/sql-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-sql-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './sql-delete-dialog.component.html',
  styleUrls: ['./sql-delete-dialog.component.css']
})
export class SqlDeleteDialogComponent implements OnInit, OnDestroy {

  myObj!: Subscription;

  @Input() data: any={};
  change: EventEmitter<any> = new EventEmitter<any>();


  constructor(public _dataService:SQLDataService, public dialog: MatDialog) { 
    this.myObj = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
    })
  }

  ngOnDestroy(): void {
    this.myObj.unsubscribe();
  }
  ngOnInit(): void {

  }

  handleClick() {
    this.data['submit']='D';
    this._dataService.pushNotification(this.data);
  }
}
