import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private _fb:FormBuilder ,private _userService:UserService,private _router:Router, private _route:ActivatedRoute) {}

id!:string;

resetForm:FormGroup=this._fb.group({
  'password':[null,Validators.required],
  'confirmpassword':[null,Validators.required]
});


ngOnInit(): void {
  this._route.params.subscribe((par)=>{
    this.id=par["id"];
  });
}

reset()
{
  if(this.resetForm.value["password"]==this.resetForm.value["confirmpassword"])
  {
      this._userService.updateUser(this.id,{password : this.resetForm.value["password"]}).subscribe(
        (data)=>
        {
           alert("Password changed successfully");
           this._router.navigate(["login"]);
        },
        (error)=>
        {
          alert("Unable to reset Password");
          console.log(error);
        }
      );
  }
  else 
  {
    alert("Password should match with Confirm Password")
  }
    
}

}
