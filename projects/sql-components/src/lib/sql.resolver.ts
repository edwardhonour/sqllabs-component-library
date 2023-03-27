import { Injectable } from '@angular/core';
import { SQLDataService } from './data.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'              
})
export class RouteParameterResolver implements Resolve<boolean> {

  r: any;
  path: any;
  id: any;
  id2: any;
  id3: any;

  constructor(private dataService: SQLDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      this.path = '';
      
      if (state.url!==undefined) {
        this.path = state.url;
      }
     
    this.r=this.dataService.pingParameters(this.path).pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log(this.r);
      this.dataService.paramSubject.next(this.r);
      this.dataService.containerSubject.next(this.r);
    return (this.r)
  }
}