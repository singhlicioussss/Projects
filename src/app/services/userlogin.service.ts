import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, Auth, authState } from '@angular/fire/auth';
import { CartService } from './cart.service';
import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  //which user is login give details
  auth$=authState(this.auth)  //when login is done successfully auth state is defined with a user and if user is not login than it will reamin undefined
  constructor(private auth:Auth,private cartService:CartService,private user:UserService,private firestore:AngularFirestore) { }

  signUp(email:string,password:string,admin:boolean){
    return createUserWithEmailAndPassword(this.auth,email,password)
    //when user is created 
    .then(res=>{
      this.user.addtoUserCart({uid:res.user.uid,mail:email})
      this.firestore.collection('users').doc(email).set({Email:email,isAdmin:admin});

    })
    .catch(error=>alert(error))
  }
  login(email:string,password:string){
    return signInWithEmailAndPassword(this.auth,email,password).catch(error=>alert(error))
  }
  logout(){
    return signOut(this.auth)
  }
}
