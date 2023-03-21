import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service'; 

@Component({
  selector: 'sql-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-card.component.html',
  styleUrls: ['./sql-card.component.css']
})
export class SqlCardComponent {
      @Input() title: any = '';
      @Input() closed: any = 'N'
      @Input() style: any = 'margin-top:10px; margin-bottom:10px; margin-left: 10px; margin-right: 10px;'
      @Input() button_class: any = 'btn btn-primary float-right';
      @Input() button_style: any = 'margin-top: 10px; margin-bottom: 10px; text-align: right!important;'
      @Input() title_class: any = 'm-2';
      @Input() title_style: any = 'font-size: 18px; font-weight: bold;'

      toggleClosed() {
        if (this.closed=='Y') {
          this.closed='N';
        } else {
          this.closed='Y';
        }
      }

}
