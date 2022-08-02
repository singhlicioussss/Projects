import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user$:User|null
  count:0
  items:''
  admin=false

  constructor(private auth:UserloginService,private adminService:UserService) {
    this.auth.auth$.subscribe(res=>{
      this.user$=res
      this.adminService.getAdmin(this.user$?.email!).subscribe(data=>this.admin=data['isAdmin']) 
    })
    
   }
   logout(){
     this.auth.logout()
   }
  searchvalue(productName:any){
    this.items=productName.value
    console.log(productName)
  }
  ngOnInit(): void {
    
  }

}
