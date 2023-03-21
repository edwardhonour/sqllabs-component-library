import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SQLDataService {

  public dataSubject = new BehaviorSubject<any>('{}');
  public pageSubject = new BehaviorSubject<any>('{}');

  t: any;
  uid: any;
  url: any;
  base: any;
  surl: any;
  un: any;
  role: any;
  config: any;

  constructor(private http: HttpClient,  @Inject('WEBSERVER') private webserver: string) { 
        if (webserver===''||webserver===undefined) {
          alert("Missing Provider in module.ts. It should include: { provide: WEBSERVER, useValue: 'https://example.com/api/' }")
        } else {
          this.base=webserver;
        }
        this.url=this.base+'sqlrouter.php';
  }

  getLocalStorage() {
    //
    if (localStorage.getItem('uid')===null) {
      this.uid="0";
    } else {
      this.uid=localStorage.getItem('uid')
    }

    if (localStorage.getItem('un')===null) {
      this.un="";
    } else {
      this.un=localStorage.getItem('un')
    }

    if (localStorage.getItem('role')===null) {
      this.role="";
    } else {
      this.role=localStorage.getItem('role')
    }
  }

  getSelect(sql: any, f: any, form: any) {
    this.getLocalStorage();
    const data = {
      "q" : f,
      "sql": sql,   
      "form": form,   
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"getselect.php", data);
  return this.t;

  }

  pingParameters(path: any) {
    this.getLocalStorage();
    const data = {  
      path: path,
      "uid": this.uid
    }

    this.t= this.http.post(this.base+"ping.php", data);
    return this.t;
  }

  getSQL(sql: any, id: any) {
    this.getLocalStorage();
    const data = {
      "id" : id,
      "sql": sql,     
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"getsql.php", data);
  return this.t;

  }

  postSQL(formData: any) {
    this.getLocalStorage();
    const data = {
      "data": formData,
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"postsql.php", data);
  return this.t;

  }

  getData(path: any, id: any, id2: any, id3: any) {
    this.getLocalStorage();
    const data = {
      "q" : path,
      "id": id,
      "id2": id2,
      "id3": id3,      
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  postForm(formID: any, formData: any[]) {
    this.getLocalStorage();
    const data = {
      "q" : formID,
      "data": formData,
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  getUser() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role
    }

    this.t= this.http.post("https://myna-api.com/api/u.php", data);
    return this.t;

  }
  
  getForm(table_name: any, id: any) {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role,
      "table": table_name,
      "id": id
    }

    this.t= this.http.post(this.base+"getforms.php", data);
    return this.t;

  }

pushNotification(data: any) {
  this.dataSubject.next(data);
}

pushPage(data: any) {
  this.pageSubject.next(data);
}

}
