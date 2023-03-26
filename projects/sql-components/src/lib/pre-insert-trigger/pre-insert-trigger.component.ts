import { Component, Input, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'pre-insert-trigger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pre-insert-trigger.component.html',
  styleUrls: ['./pre-insert-trigger.component.css']
})
export class PreInsertTriggerComponent implements AfterViewInit, OnChanges, OnDestroy {

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
    console.log('pre-insert-trigger: registerService: init')
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      console.log('pre-insert-trigger: registerService: subscribe')
      if (this.data.triggers===undefined) {
        let t: any = [];
        this.data.triggers=t;
      }
      count=0;
      console.log('before')
      console.log(this.data);
      console.log('after')
      this.data.triggers.forEach((element: any) => {
        console.log(element)
        if (element.type=='pre-insert-trigger'&&element.name==this.name) {
             count++;
        }
      });
      console.log('count')
      console.log(count)
      if (count==0) {
        let tr: any = { type: 'pre-insert-trigger', name: this.name, sql: this.sql, order: this.order }
        console.log('before push');
        console.log(this.data.triggers)
        this.data.triggers.push(tr);
        console.log('after push');
        console.log(this.data.triggers)
        this._dataService.dataSubject.next(this.data);
      }
    })

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('pre-insert-trigger: AVI')
      this.registerService();  
    }, 1000);
  }
  
}
