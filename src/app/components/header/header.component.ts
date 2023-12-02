import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(public _authService:AuthService){}

  isAuthenticated:boolean=false;

  ngOnInit(): void 
  {
     this.isAuthenticated=this._authService.isAuthenticated();
  }

}
