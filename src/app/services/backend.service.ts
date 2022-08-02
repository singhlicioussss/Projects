import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection,collectionData,deleteDoc,docData,Firestore, setDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private firestore:Firestore,private angularFirestore:AngularFirestore,private fire:Firestore) { 
  }
  putData(type:{name?:string,image?:string,category?:string,price?:number}){
    let productData=collection(this.firestore,'table')
    return addDoc(productData,type)}
    
  getData(){
    let productData=collection(this.firestore,'table')
    return collectionData(productData,{idField:'id'})
  }
   
  getSpecificData(id:string){
    let productData=doc(this.firestore,'table',id)
    return docData(productData) as Observable<product>
  }
  setData(data:product){
    let productData=doc(this.firestore,'table',data.id!)
    console.log(data);

    return setDoc(productData,data)
    
    // this.angularFirestore.collection('table').add({
    //   category:data.
    // })
  }
  remove(id:string){
   let ref=doc(this.firestore,'table',id)
   return deleteDoc(ref)
  }
  // categoryName(){
  //   return new Promise<any>((resolve) => {
  //     this.angularFirestore
  //       .collection('category')
  //       .valueChanges({ idField: 'id' })
  //       .subscribe((categories) => resolve(categories));
  //   });
  // }
  // subcategoryName(){
  //   return new Promise<any>((resolve) => {
  //     this.angularFirestore
  //       .collection('subcategory')
  //       .valueChanges({ idField: 'id' })
  //       .subscribe((subcategories) => resolve(subcategories));
  //   });
  
}

