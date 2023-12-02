import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _fb:FormBuilder,private _authService:AuthService, private _router:Router){}

  registerForm:FormGroup=this._fb.group({
    'firstName':[null,Validators.required],
    'lastName':[null,Validators.required],
    'dob':[null,Validators.required],
    'gender':[null,Validators.required],
    'email':[null,Validators.required],
    'password':[null,Validators.required]
  })

  register() 
  {
    if(this.registerForm.valid)
    {
      this._authService.register(this.registerForm.value).subscribe(
        (data)=>
        {
            this._router.navigateByUrl("['/login']");
        },
        (error)=>
        {
            alert("Something went wrong...");
        }
      );
    }
    else 
    {
      alert("Enter valid data");
    }
     
  }
}
