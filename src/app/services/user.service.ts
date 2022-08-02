import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, Firestore,setDoc,docData } from '@angular/fire/firestore';
import { UCart } from '../models/user.interface';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:UCart
  constructor(private fire:Firestore ) { }
  addtoUserCart(user:UCart){
    let id=user.uid!
    const newRef=doc(this.fire,'user',id)
    return setDoc(newRef,user)
  }
  // setuserDetails(details:any){
  //   return this.firestore.collection('user').doc(<string>details.email).set({
  //   email:details.email
  //   })

  // }
  getAdmin(email:string){
    const ref=doc(this.fire,'users',email)
    return docData(ref)
  }
  getCart(id:string){
    const newRef=doc(this.fire,'user',id)
    return docData(newRef)
    }
}
