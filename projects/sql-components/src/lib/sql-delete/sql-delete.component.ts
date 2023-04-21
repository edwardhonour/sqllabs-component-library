import { Component, OnInit, Input, Output, EventEmitter,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 
import { Subject, Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SqlDialogComponent } from '../sql-dialog/sql-dialog.component';
import { SqlDeleteDialogComponent } from '../sql-delete-dialog/sql-delete-dialog.component';


@Component({
  selector: 'sql-delete',
  standalone: true,
  imports: [CommonModule, SqlDialogComponent],
  templateUrl: './sql-delete.component.html',
  styleUrls: ['./sql-delete.component.css']
})
export class SqlDeleteComponent implements OnInit, OnDestroy {

  myObj!: Subscription;

  @Input() data: any={};
  @Input() label: any = 'Delete Record';
  @Input() warning: any = 'Are you sure you want to delete this record?';
  @Input() class: any = 'btn btn-danger';
  @Input() style: any = '';
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  constructor(public _dataService:SQLDataService, public dialog: MatDialog) { 
    this.myObj = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.counter++;
    })
  }

  handleClick(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SqlDeleteDialogComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnDestroy(): void {
//    this.myObj.unsubscribe();
  }
  ngOnInit(): void {

  }

}
