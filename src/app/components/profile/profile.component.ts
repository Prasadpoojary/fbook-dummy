import { Component, OnInit, Sanitizer } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
     image!:any;
     postCount!:number;
     friendCount!:number;

     constructor(private _userService:UserService){}


  ngOnInit(): void {
    let userID=localStorage.getItem("id");
    if(userID)
    {
      this._userService.allFriends().subscribe(
        (data:any[])=>
        {
            this.friendCount=data.filter(f => f['userId']==userID).length;
        },
        (error)=>
        {
          console.log(error);
        }
      );

      this._userService.allPostByUser(userID).subscribe(
        (data)=>
        {
            this.postCount=data.length;
        },
        (error)=>
        {
          console.log(error);
        }
      );

      this._userService.getUser(userID).subscribe(
        (data)=>
        {
           this._userService.getPhoto(data['photoId']).subscribe(
            (data)=>
            {
              let url=URL.createObjectURL(data);
              this.image=url;
            }
           );
        }
      );
    }
  }


}
