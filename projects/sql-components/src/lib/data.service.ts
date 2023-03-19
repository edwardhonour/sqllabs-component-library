import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataSubject = new BehaviorSubject<any>('{}');
  public pageSubject = new BehaviorSubject<any>('{}');

  t: any;
  uid: any;
  url: any;
  surl: any;
  un: any;
  role: any;

  constructor(private http: HttpClient) { 
        this.url='https://myna-api.com/api/psp_router.php';
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

  this.t= this.http.post("https://myna-api.com/api/getselect.php", data);
  return this.t;

  }

  pingParameters(path: any) {
    this.getLocalStorage();
    const data = {  
      path: path,
      "uid": this.uid
    }

    this.t= this.http.post("https://myna-api.com/api/ping.php", data);
    return this.t;
  }

  getSQL(sql: any, id: any) {
    this.getLocalStorage();
    const data = {
      "id" : id,
      "sql": sql,     
      "uid": this.uid
    }

  this.t= this.http.post("https://myna-api.com/api/getsql.php", data);
  return this.t;

  }

  postSQL(formData: any) {
    this.getLocalStorage();
    const data = {
      "data": formData,
      "uid": this.uid
    }

  this.t= this.http.post("https://myna-api.com/api/postsql.php", data);
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

  postLogin(username: any, password: any) {
    const data = {
      "q" : "login",
      "username": username,
      "password": password
    }
  console.log(data)
  this.t= this.http.post(this.url, data);
  return this.t;

  }

  getVerticalMenu() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role
    }
  this.t= this.http.post("https://myna-api.com/api/psp-menu.php", data);
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

    this.t= this.http.post("https://myna-api.com/api/getforms.php", data);
    return this.t;

  }

  getEnroll(token: any) {
    this.getLocalStorage()
    const data = {
      "q" : "enroll",
      "token": token
    }

  this.t= this.http.post("https://myna-api.com/api/enroll.php", data);
  return this.t;

}

pushNotification(data: any) {
  this.dataSubject.next(data);
}

pushPage(data: any) {
  this.pageSubject.next(data);
}

postTemplate(file_data:any) {
  console.log(file_data);
  this.t=this.http.post('https://myna-docs.com/api/upload_security_section.php',file_data);
  return this.t;
}

}
