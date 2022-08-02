import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from '../services/userlogin.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.scss']
})
export class UserregComponent implements OnInit {
  hide:boolean=false;
  constructor(private firestore:AngularFirestore,private formbuilder:FormBuilder,private router:Router,private auth:UserloginService) { }

  ngOnInit(): void {
  }
  loginForm: FormGroup = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    admin:[false]
  })


  onSignup() {
    console.log(this.loginForm.value);
    this.auth.signUp(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value,this.loginForm.controls['admin'].value).
    then(res=>{
      console.log(res);
      
      this.router.navigate([""])
    })
    


}

sendDatatoService(details:any){
console.log(details);

}

}