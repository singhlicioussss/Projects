import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
  product:any;
  cartDocName:any=localStorage.getItem('email')
  Itemlist:any[]=[]
   ProductList=new BehaviorSubject<any>([]);
  constructor(private firestore:AngularFirestore) { 
  }
  getProducts(){
    return this.ProductList.asObservable();
  }
  setProducts(){
    this.Itemlist.push(this.product)
    this.ProductList.next(this.product);
  }
  addtoWhishlist(product:any){
    this.Itemlist.push(product);
    console.log(product)
    this.firestore.collection('whishlist').doc(this.cartDocName).set({cartData:this.Itemlist}).then(()=>{
    }) 
    this.ProductList.next(this.Itemlist);
    console.log(this.Itemlist)
  }
 
}

