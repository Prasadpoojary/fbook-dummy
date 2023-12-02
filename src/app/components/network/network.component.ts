import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private _userService:UserService){}

  friends:any[]=[];

ngOnInit(): void {
  
  let userID=localStorage.getItem("id");
  if(userID)
  {
    this._userService.allFriends().subscribe(
      (data:any[])=>
      {
          this.friends=data.filter(f=>f["userId"]!=userID);
      },
      (error)=>
      {
        alert("Unable to load network");
        console.log(error);
      }
    );
}
 

}


}
