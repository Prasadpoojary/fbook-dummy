import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor(private _userService:UserService){}
 

  @Input()
  friendId!:string;

  name!:string;
  image!:string;
  status!:string;


  ngOnInit(): void {
    this._userService.getUser(this.friendId).subscribe(
      (data)=>
      {
        console.log(data);
        this.name=data["firstName"]+" "+data["lastName"];
         this._userService.getPhoto(data['photoId']).subscribe(
          (imageData)=>
          {
            let url=URL.createObjectURL(imageData);
            this.image=url;
          }
         );
      }
    );
  }
  
  sendRequest()
  {
    let userID=localStorage.getItem("id");
    
    if(userID)
    {
      let data={userId:userID, friendId:this.friendId,status:"Request Pending"};
      this._userService.createFriendRequest(data).subscribe(
        (data)=>
        {
          this.status="Request Pending";
        },
        (error)=>
        {
          console.log(error);
        }
      );
    }
  }
}
