import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserloginService } from '../services/userlogin.service';
import { NotificationsService } from '../services/notifications.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  hide:boolean=false;
  constructor(private notify:NotificationsService,private formbuilder:FormBuilder,private auth:UserloginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm: FormGroup = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    this.auth.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value).
    then(res=>{
      localStorage.setItem('email',this.loginForm.value.email)
      this.notify.loginSuccess('Login successfully','Success')
      this.router.navigate([""])})
  }
  onCheck(){
    if(this.loginForm.valid){
      this.onLogin()
      
    }
    else{
      this.notify.loginError("unsuccessfull login",'Alert')
    }
  }
   

}
