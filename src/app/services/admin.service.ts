import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore:Firestore) { }
  getAdmin(){
    const ref=doc(this.firestore,'admin/admin')
    return docData(ref)
  }
  
}
