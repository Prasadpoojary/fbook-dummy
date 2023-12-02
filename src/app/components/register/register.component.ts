import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _fb:FormBuilder,private _authService:AuthService){}

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
