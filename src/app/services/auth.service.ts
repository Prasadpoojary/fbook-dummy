import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { 
        this.isAuthenticated.next(!!localStorage.getItem("token"));
   }

  api:string='http://3.17.216.66:3000/';

  public isAuthenticated:BehaviorSubject<boolean>=new BehaviorSubject(false);


  register(user:User):Observable<any>
  {
     return this._http.post(this.api+'users/register',user);
  }

  login(data:any):Observable<any>
  {
     return this._http.post(this.api+'users/authenticate',data);
  }


 

  //prasadpoojary145@gmail.com
  //Savithri143@



}
