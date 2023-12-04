import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  api:string='http://3.17.216.66:3000/';

  getUser(id:string):Observable<any>
  {
      return this._http.get(`${this.api}users/${id}`);
  }

  getUserByEmail(email:string):Observable<any>
  {
      return this._http.post(`${this.api}users/finduserbyemail`,{email:email});
  }

  allPost():Observable<any>
  {
      return this._http.get(`${this.api}posts/`);
  }

  allPostByUser(userid:string):Observable<any>
  {
    return this._http.post(`${this.api}posts/findpostbyuserid`,{id:userid});
  }

  allFriends():Observable<any>
  {
      return this._http.get(`${this.api}friends`);
  }

  allUsers():Observable<any>
  {
      return this._http.get(`${this.api}users/`);
  }
  
  getPhoto(photoId:string):Observable<any>
  {
      return this._http.get(`${this.api}files/${photoId}`,{responseType:"blob"});
  }

  createPost(data:Post)
  {
    return this._http.post(`${this.api}posts/createpost`,data);
  }

  createFriendRequest(data:any)
  {
    return this._http.post(`${this.api}friends/createrequest`,data);
  }

  updateUser(userid:string,data:any):Observable<any>
  {
    return this._http.put(`${this.api}users/${userid}`,data);
  }
}
