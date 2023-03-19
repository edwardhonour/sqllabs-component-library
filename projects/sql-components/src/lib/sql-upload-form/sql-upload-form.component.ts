import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlInputComponent } from '../sql-input/sql-input.component';
import { DataService } from '../data.service';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'sql-upload-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './sql-upload-form.component.html',
  styleUrls: ['./sql-upload-form.component.css']
})
export class SqlUploadFormComponent implements OnInit, DoCheck, OnChanges, AfterViewInit {
  index: any;
  last_id: any = '';

  constructor(private _http: HttpClient, private _dataService: DataService) {
      
      this._dataService.dataSubject.subscribe(d => {
        this.data=d;
        this.counter++;
        console.log('sql-form' + this.counter)
        if (this.data.id!=this.last_id) {
          this.last_id=this.data.id;
          this.id=this.data.id;
          this.ngAfterViewInit();
        }
        if (this.data.submit==='Y') {
          this.postSQL();
        }
        console.log(d)
      })
   }

  //-- Inputs
  @Input() data: any;                                     // Depreciated
  @Input() path: any = "https://myna-docs.com/upload.php";           
  @Input() id: any = '0';                                 // Primary key for an existing record = 0=Insert
  @Input() table: any = "dual";                           // Name of the base table.
  @Input() embedded: any = "N";                           // Is the form embedded in a list.
  @Input() card: any = "Y";                               // Show the form in a card Y/N
  @Input() closable: any = "N";                           // Is the form closable Y/N
  @Input() open: any = "Y";                               // Does a closable form start open.
  @Input() class: any = "";                               // Class for the form container.
  @Input() style: any = "";                               // Style for the form container.
  @Input() title: any = "";                               // Title of the form.
  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   // What bootstrap columns.
  @Input() handler: any = 'default';                      // what handler is used to process the form.

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() saved: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  showErrorAlert: any = 'N';
  errorMessage: any = 'Post Failed'
  showSuccessAlert: any = 'N';
  ngOnInit(): void {

  }

  showUpload() {
    this.change.emit('DONE')
  }
  ngAfterViewInit(): void {
      if (this.embedded=='Y') {
        this.id==this.data.id;
      }
      this._dataService.getForm(this.table, this.id).subscribe((data:any)=>{
        this.data=data;
        console.log('pushing first query')
        this._dataService.pushNotification(this.data);
      });
  }

  postSQL() {
    this._dataService.postSQL(this.data).subscribe((data:any)=>{
      if (data.error_code=="0") { 
        this.showSuccessAlert='Y';
        this.showErrorAlert='N';
        this.errorMessage='Record Saved';
      } else {
        this.showSuccessAlert='N';
        this.showErrorAlert='Y';
        this.errorMessage=data.error_message;
        this.errorMessage='Record Saved';
      }
      this._dataService.pushNotification(data);
      setTimeout(()=>{
        this.showErrorAlert='N';
        this.showSuccessAlert='N';
      },5000);

    });
  }
  
  ngDoCheck(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  file=new FormControl('')
  file_data:any=''

  fileChange(index: any, event: any) {
    
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        let k: string;
        let v: any;
        const file = fileList[0];
        console.log('finfo',file.name,file.size,file.type);
        if((file.size/1048576)<=8)
        {
          let formData = new FormData();
          formData.append('file', file, file.name);
          for ([k, v] of Object.entries(this.data)) {
            formData.append(k,v);  
          }
          this.file_data=formData
        }else{
          alert('File size exceeds 8 MB. Please choose less than 8 MB');
        }
        
    }

  }

  uploadFile()
    {
      console.log(this.file_data);
      this._http.post(this.path,this.file_data)
      .subscribe(res => {
        location.reload()
        console.log(res.toString)
      }, (err) => {
      //send error response
      alert('error occured')
    });
    }

}


