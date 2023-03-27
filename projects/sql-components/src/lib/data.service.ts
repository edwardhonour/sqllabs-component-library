import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SQLDataService {

  public dataSubject = new BehaviorSubject<any>({});
  public pageSubject = new BehaviorSubject<any>({});
  public paramSubject = new BehaviorSubject<any>({});
  public routerSubject = new BehaviorSubject<any>({});
  public containerSubject = new BehaviorSubject<any>({ id: "", id2: "", id3: "" });

  enData: any;
  dataValue: any = { id: "hello", id2: "world" }
  TheSecret="hide-triggers";
  saltHex: any;
  ctHex: any;
  ivHex: any;

  t: any;
  uid: any;
  url: any;
  base: any;
  surl: any;
  un: any;
  role: any;
  config: any;
  counter: number = 0;

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

  getSelect(sql: any, params: any) {
    this.getLocalStorage();
    const data = {
      "q" : 'getselect',
      "sql": sql,   
      "parameters": params,   
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"sqlcomponents.php", data);
  return this.t;

  }

  pingParameters(path: any) {

      let output: any = { page: '', id: '', id2: '', id3: '' };
  
      let j: any = path.split('/');
  
      if (j[1]!==undefined) { output.page=j[1]; }
      if (j[2]!==undefined) { output.id=j[2];   }
      if (j[3]!==undefined) { output.id2=j[3];  }
      if (j[4]!==undefined) { output.id3=j[4];  }
  
      return of(output);
  
  }

  getSQL(sql: any, id: any) {
    this.counter++;
    this.getLocalStorage();
    const data = {
      "counter": this.counter,
      "q": "getsql",
      "parameters" : id,
      "sql": sql,     
      "uid": this.uid,
    }
    if (this.counter!=2) {
      this.t= this.http.post(this.base+"sqlcomponents.php", data);
      return this.t;
    }
  }

  getMenu(sql: any, id: any) {
    this.getLocalStorage();
    const data = {
      "q": "getmenu",
      "parameters" : id,
      "sql": sql,  
      "uid": this.uid
    }

  this.t= this.http.post(this.base+"sqlcomponents.php", data);
  return this.t;

  }

  postSQL(formData: any) {

    var CryptoJSAesJson = {
      stringify: function (cipherParams: any) {
        var j: any = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();
        return JSON.stringify(j);
      },
      parse: function (jsonStr: any) {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({
          ciphertext: CryptoJS.enc.Base64.parse(j.ct),
        });
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
        return cipherParams;
      },
    };

    this.getLocalStorage();

    let triggers=formData.triggers;
    let k = CryptoJS.AES.encrypt(JSON.stringify(triggers), this.TheSecret, {format: CryptoJSAesJson}).toString();
    formData.triggers=k;

    const data = {
      "q" : "postform",
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

    var CryptoJSAesJson = {
      stringify: function (cipherParams: any) {
        var j: any = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();
        return JSON.stringify(j);
      },
      parse: function (jsonStr: any) {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({
          ciphertext: CryptoJS.enc.Base64.parse(j.ct),
        });
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
        return cipherParams;
      },
    };

    this.getLocalStorage();

    let k = CryptoJS.AES.encrypt(JSON.stringify(formData), this.TheSecret, {format: CryptoJSAesJson}).toString();

    const data = {
      "q" : "postform",
      "data": k,
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
