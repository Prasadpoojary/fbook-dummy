import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private _userService:UserService,private _router:Router){}

  users:any[]=[];

  action:boolean=false;

ngOnInit(): void {
  
  let userID=localStorage.getItem("id");
  if(userID)
  {
    this._userService.allUsers().subscribe(
      (data:any[])=>
      {
          this.users=data;
      },
      (error)=>
      {
        alert("Unable to load users");
        console.log(error);
      }
    );
}
else 
{
  this._router.navigateByUrl("/login");
}
 
 

}
}
