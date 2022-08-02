import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private fire:Firestore) {   }
  setOrder(data:any){
    const ref=collection(this.fire,'orders')
    return addDoc(ref,data)

  }
}
