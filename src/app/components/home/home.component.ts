import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _userService:UserService){}


  posts:any[]=[];
  newPost!:Post;
  postData:string="";

  ngOnInit(): void {
    this.newPost=new Post();
    this._userService.allPost().subscribe(
      (data:any[])=>
      {
        this.posts=data;
      },
      (error)=>
      {
        alert("Unable to load posts");
      }
    );
  }

  addPost()
  {
    let userId=localStorage.getItem('id');
    if(userId)
    {
      this._userService.getUser(userId).subscribe(
        (data:any)=>
        {
          console.log(this.newPost?.isActive);

            this.newPost.isActive=data["isActive"];
            this.newPost.isAdmin=data["isAdmin"];
            this.newPost.post=this.postData;
            this.newPost.postImageId="";
            this.newPost.profession="";
            this.newPost.userId=data["userId"];
            this.newPost.userName=data["userName"];
            this.newPost.userPhotoId=data["userPhotoId"];

            this._userService.createPost(this.newPost).subscribe(
              (data)=>
              {
                 console.log(data);
                 alert("Posted successfully");
              },
              (error)=>
              {
                alert("Unable to add post");
              }
            );

        },
        (error)=>
        {
            alert("something went wrong...");
        }
      );
    }
  }



}
