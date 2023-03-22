import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, 
  OnDestroy, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLDataService } from '../data.service';    
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import  InteractionPlugin  from '@fullcalendar/interaction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sql-fullcalendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './sql-fullcalendar.component.html',
  styleUrls: ['./sql-fullcalendar.component.css']
})
export class SqlFullcalendarComponent implements OnInit, DoCheck, OnChanges, AfterViewInit, OnDestroy {
  
  //-- Inputs
  @Input() router: any = 'N';                             // does data come from Router.
  @Input() data: any;                                     // Depreciated
  @Input() sql: any = "select 'x' from dual";             // query to populate panel.          
  @Input() id: any = '0';                                 // Primary key for query.
  @Input() card: any = "Y";                               // Show the panel in a card Y/N
  @Input() closable: any = "N";                           // Is the panel closable Y/N
  @Input() open: any = "Y";                               // Does a closable form start open.
  @Input() class: any = "";                               // Class for the panel container.
  @Input() style: any = "";                               // Style for the panel container.
  @Input() title: any = "";                               // Title of the Panel.
  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   // What bootstrap columns.

  params: any = { id: '', id2: '', id3: ''};

  myObj!: Subscription;

  handleDateClick(arg:any) {
    console.log(arg.event._def.publicId)
    console.log('date click')
    console.log(arg)
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, InteractionPlugin],
    eventClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [
    ]
  };

  r: any;
  path: any;
  //id: any;
  id2: any;
  id3: any;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  public parameterValue: string = '';

  constructor(private _dataService: SQLDataService, 
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }
      
  ngAfterViewInit() {
    this.myObj = this._dataService.getCalendar(this.sql, this.params).subscribe((data:any)=>{
        this.data=data;
        this.calendarOptions.events=this.data;
     });
  }
  
  ngDoCheck(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.myObj.unsubscribe();
  }
}
