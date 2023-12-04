import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _fb:FormBuilder,private _authService:AuthService, private _router:Router){}

  loginForm:FormGroup=this._fb.group({
    'email':[null,Validators.required],
    'password':[null,Validators.required]
  })

  login()
  {
    if(this.loginForm.valid)
    {
      this._authService.login(this.loginForm.value).subscribe(
        (data)=>
        {
            let token=data["token"];
            let id=data["_id"];

            localStorage.setItem("token",token);
            localStorage.setItem("id",id);
            this._authService.isAuthenticated.next(true);
            this._router.navigateByUrl("/");
        },
        (error)=>
        {
            alert("Username or password is incorrect");
        }
      );
    }
    else 
    {
      alert("Enter valid data");
    }
  }
}
