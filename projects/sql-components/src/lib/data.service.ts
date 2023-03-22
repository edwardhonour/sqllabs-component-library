import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SQLDataService {

  public dataSubject = new BehaviorSubject<any>('{}');
  public pageSubject = new BehaviorSubject<any>('{}');
  public paramSubject = new BehaviorSubject<any>('{}');
  public routerSubject = new BehaviorSubject<any>('{}');

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
        this.url=this.base+'sqlcomponents.php';
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
      "q" : 'getselect',
      "sql": sql,   
      "form": form,   
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"sqlcomponents.php", data);
  return this.t;

  }

  pingParameters(path: any) {
    this.getLocalStorage();
    const data = {
      q: 'ping',  
      path: path,
      "uid": this.uid
    }
    this.t= this.http.post(this.base+"sqlcomponents.php", data);
    return this.t;
  }

  getSQL(sql: any, id: any) {
    this.getLocalStorage();
    const data = {
      "q": "getsql",
      "parameters" : id,
      "sql": sql,     
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"sqlcomponents.php", data);
  return this.t;

  }

  postSQL(formData: any) {
    this.getLocalStorage();
    const data = {
      "q": "postform",
      "data": formData,
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"sqlcomponents.php", data);
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

  postForm(formData: any[]) {
    this.getLocalStorage();
    const data = {
      "q" : "postform",
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
  
  getForm(table_name: any, parameters: any) {
    this.getLocalStorage()
    const data = {
      "q" : "getform",
      "table": table_name,
      "parameters": parameters
    }

    this.t= this.http.post(this.base+"sqlcomponents.php", data);
    return this.t;

  }

pushNotification(data: any) {
  this.dataSubject.next(data);
}

pushPage(data: any) {
  this.pageSubject.next(data);
}

getCalendar(sql: any, params: any) {
      this.getLocalStorage();
      const data = {
        "q" : 'calendar',
        "sql": sql,   
        "parameters": params,   
        "uid": this.uid
      }

    this.t= this.http.post(this.base+"sqlcomponents.php", data);
    return this.t;

}

}
