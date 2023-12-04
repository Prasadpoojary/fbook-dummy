import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuardAdmin implements CanActivate {
    constructor(
        private authService:AuthService,
        private userService:UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated) {
            let isAdmin:boolean=true;
          
            let userID=localStorage.getItem("id");
            this.userService.getUser(userID?userID:"").subscribe(
                
            (data)=>
            {
               isAdmin=data["isAdmin"];
            },
            (error)=>
            {
                console.log(error);
            });

            return isAdmin;
            
        }

        return false;
    }
}