import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { UserloginService } from './userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user:string|undefined|null
  admin=false
  constructor(private auth:UserloginService,private adminService:UserService){
    this.auth.auth$.subscribe(res=>{
      this.user=res?.email
      console.log(this.user)
      
      this.adminService.getAdmin(this.user!).subscribe(data=>this.admin=data['isAdmin'])
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.admin
  }
  
}
