import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth } from '@angular/fire/auth';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginForm:FormGroup

  constructor(private auth:Auth,private notify:NotificationsService,private formbuilder:FormBuilder,private adminService:AdminService,private route:Router) {
    this.loginForm= formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
   }
   hide:boolean=false
  ngOnInit(): void {
    
  }
  get email(){
    return this.loginForm.get('email')?.value
  }
  get password(){
    return this.loginForm.get('password')?.value
  }

  onLogin() {
    this.adminService.getAdmin().subscribe(res=>{
      if(this.email==res['email'] && this.password==res['password']){
        this.route.navigate(['setproducts'])
      }
      else{
        this.notify.loginError("invalid login",Error)
      }
    })
  }
  onCheck(){
    if(this.loginForm.valid){
      this.onLogin()
      
    }
  }
}