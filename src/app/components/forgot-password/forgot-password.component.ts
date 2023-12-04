import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private _fb:FormBuilder,private _userService:UserService, private _router:Router){}

  forgotForm:FormGroup=this._fb.group({
    'email':[null,Validators.required],
    'dob':[null,Validators.required]
  });

  validateData()
  {
    this._userService.getUserByEmail(this.forgotForm.value["email"]).subscribe(
      (data)=>
      {
        let validDate=formatDate(data[0]["dob"], 'yyyy-MM-dd', 'en-US');
        if(validDate==this.forgotForm.value["dob"])
        {
          this._router.navigate(["reset",data[0]["_id"]])
        }
        else 
        {
          alert("DOB is invalid");
        }
      },
      (error)=>
      {
        alert("E-mail not found");
      }
    );
  }

}
