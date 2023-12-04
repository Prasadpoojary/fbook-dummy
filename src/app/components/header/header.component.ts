import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private _authService:AuthService,private _userService:UserService,private _router:Router ){}

  isAuthenticated!:boolean;
  isAdmin!:boolean;

  
  ngOnInit(): void 
  {
     this._authService.isAuthenticated.subscribe((data)=>
     {
        this.isAuthenticated=data
        
        if(!this.isAuthenticated)
        {
          this._router.navigateByUrl("/login");
        }
        else 
        {
          let userID=localStorage.getItem("id");
          this._userService.getUser(userID?userID:"").subscribe(
            (data)=>
            {
               this.isAdmin=data["isAdmin"];
            }
          );
        }
     });
     
  }

  logout()
  {
      this._authService.isAuthenticated.next(false);
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      this._router.navigateByUrl("/login");
  }

}
