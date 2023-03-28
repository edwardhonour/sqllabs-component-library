import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule  }  from '@angular/material/icon';
import { SQLDataService } from '../data.service';
import { Subscription } from 'rxjs';
import { Validators, Editor, Toolbar, toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'sql-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, NgxEditorModule ],
  templateUrl: './sql-editor.component.html',
  styleUrls: ['./sql-editor.component.scss']
})
export class SqlEditorComponent implements OnInit, AfterViewInit, OnDestroy  {

  editor: any;
  editordoc: any;
  
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  value: any=''; 
  fieldData: any = '';
  myObs!: Subscription;

  @Input() preview: string = 'Y';
  @Input() edit: string = 'Y';  
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
  showing_preview: string = 'N';
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();  
  
  ngAfterViewInit() {
  
  }

  formData: any;
  constructor(private _dataService: SQLDataService) { 
    this.myObs = this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.fieldData = this.data;
      if (this.fieldData[this.col]===undefined) {
        this.value = JSON.parse('{ "type": "doc", "content": [] }');
        this.editordoc = "";
      } else {
            if (this.fieldData[this.col]!=='') {
              this.value = JSON.parse(this.fieldData[this.col]);
              this.editordoc = toHTML(this.value);
            } else {
              this.value = JSON.parse('{ "type": "doc", "content": [] }');
              this.editordoc="";
            }
      }
      this.counter++;
    })
  }

  showPreview() {
    this.edit='N';
  }

  showEdit() {
    this.edit='Y';
  }

  ngOnInit(): void {
      this.editor = new Editor();
  }

  handleChange() {
     this.fieldData['submit']='N';
     this.fieldData[this.col]=JSON.stringify(this.value);
     this.editordoc = toHTML(this.value);
     this._dataService.pushNotification(this.fieldData);
  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe();
  }
}
