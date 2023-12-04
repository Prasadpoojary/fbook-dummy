import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  constructor(private _fb:FormBuilder,private _userService:UserService, private _router:Router){}

  updateForm:FormGroup=this._fb.group({
    'firstName':["",Validators.required],
    'lastName':["",Validators.required],
    'dob':["",Validators.required],
    'gender':["",Validators.required],
    'email':["",Validators.required]
  });

  ngOnInit(): void {
    let userID=localStorage.getItem("id");
    if(userID)
    {
      this._userService.getUser(userID).subscribe(
      (data)=>
      {
        console.log(data?.firstName+" "+data?.lastName);
          this.updateForm=this._fb.group({
            'firstName':[data?.firstName,Validators.required],
            'lastName':[data?.lastName,Validators.required],
            'dob':[formatDate(data?.dob, 'yyyy-MM-dd', 'en-US'),Validators.required],
            'gender':[data?.gender,Validators.required],
            'email':[data?.email,Validators.required]
          });

        
      },
      (error)=>
      {
          alert("Unable to load the user");
      });
    }
    
  }

  update()
  {
    let userID=localStorage.getItem("id");
    if(userID)
    {
      this._userService.updateUser(userID,this.updateForm.value).subscribe(
        (data)=>
        {
            alert("Details updated successfully");
        },
        (error)=>
        {
           alert("Unable to update");
        }
      );
    }
        
  }

}
