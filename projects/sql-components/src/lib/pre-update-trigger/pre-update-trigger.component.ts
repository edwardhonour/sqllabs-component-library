import { Component, Input, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'pre-update-trigger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pre-update-trigger.component.html',
  styleUrls: ['./pre-update-trigger.component.css']
})
export class PreUpdateTriggerComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input() name: any = 'pre-insert';
  @Input() sql: any = '';
  @Input() order: any = '0';
  myObs!: Subscription;
  data: any;

  constructor(private _dataService: SQLDataService) {

  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  registerService() {

    let count: number=0;
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      if (this.data.triggers===undefined) {
        let t: any = [];
        this.data.triggers=t;
      }
      count=0;
      this.data.triggers.forEach((element: any) => {
        if (element.type=='pre-update-trigger'&&element.name==this.name) {
             count++;
        }
      });
      if (count==0) {
        let tr: any = { type: 'pre-update-trigger', name: this.name, sql: this.sql, order: this.order }
        this.data.triggers.push(tr);
        this._dataService.dataSubject.next(this.data);
      }
    })

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.registerService();  
    }, 1000);
  }
  
}


