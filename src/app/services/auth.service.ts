import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  api:string='http://3.17.216.66:3000/';

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
