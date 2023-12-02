import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _fb:FormBuilder,private _authService:AuthService){}

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
            console.log(data);
        },
        (error)=>
        {
          console.log(error);
        }
      );
    }
    else 
    {
      alert("Enter valid data");
    }
  }
}
