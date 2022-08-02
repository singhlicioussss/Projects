import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product:any
  cartDocName:any=localStorage.getItem('email')
  Itemlist:any[]=[]
   ProductList=new BehaviorSubject<any>([]);
  
  constructor(private firestore:AngularFirestore,private notify:NotificationsService) { 
    
    }
    getProducts(){
      // const ref=doc(this.firestore)
      return this.ProductList.asObservable();
    }
    setProducts(){
      this.Itemlist.push(this.product)
      this.ProductList.next(this.product);
    }
    addtoCart(product:any){
      this.Itemlist.push(product);
      console.log(product)
      this.firestore.collection('cart').doc(this.cartDocName).set({cartData:this.Itemlist}).then(()=>{
        this.notify.showSuccess("product added successfully","product added")
      }) 
      this.ProductList.next(this.Itemlist);
      console.log(this.Itemlist)
    }

    getTotalPrice():number{
      let total=0;
      this.Itemlist.map((a:any)=>{
        total+=+a.total;
      })
    return total}

removeItem(product:any){

  
  this.Itemlist.map((a:any,index:any)=>{
  if(product.id===a.id){
    this.Itemlist.splice(index,1)
    this.ProductList.next(this.Itemlist)
    this.firestore.collection('cart').doc(this.cartDocName).set({cartData:this.Itemlist}).then(()=>{
      this.notify.remData("removed successfully","removed")
    })
  }
  })
}
}