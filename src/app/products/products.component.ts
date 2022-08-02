import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CartComponent } from '../cart/cart.component';
import { ICart } from '../models/cart.interface';
import { product } from '../models/product.interface';
import { BackendService } from '../services/backend.service';
import { CartService } from '../services/cart.service';
import { UserloginService } from '../services/userlogin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WhishlistService } from '../whishlist.service';
import { NotificationsService } from '../services/notifications.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
   itemList:any;
   itemname:string='';
   itemData:any=[];
   uid:string|undefined
  items:{name?:string,image?:string,category?:string,subcategory?:string,price?:number}[]=[]
  filterItems:{name?:string,image?:string,category?:string,subcategory?:string,price?:number}[]=[]
  name=''
  subname=''
  @ViewChild('quantity') quantity:ElementRef
  cart:ICart={}
  constructor(private route:ActivatedRoute,
    private router:Router,private auth:UserloginService,
    private product:BackendService,
    private cartService:CartService,
    private notify:NotificationsService
    ,private whishlist:WhishlistService) { 
    
}
  ngOnInit(): void {
    this.product.getData().subscribe(res=>{
      this.filterItems=this.items=res
      this.route.queryParams.subscribe(res=>{
        this.name=res['category']
        this.subname=res['subcategory']
        // if we want to implement search on the product page itself if none of the keyword is given than all items must be shown 
        if(this.name){
        this.filterItems=this.name?this.items.filter(res=>{
          return res.category==this.name}):this.items
        }
        if(this.subname){
          this.filterItems=this.subname?//checking if selected subcategory dispaly and filter according to that
        
          this.filterItems.filter(res=>{
            return res.subcategory==this.subname}):this.filterItems
        
        }
        this.filterItems.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price})
        })   
    })
  })
    this.UserDefined()
}
  UserDefined(){   // checks by the userid and puts the selected items in the cart according to the user
    this.auth.auth$.subscribe(res=>
      this.uid=res?.uid)
  }
  
  addToCart(product:any): void{
    if(this.uid==undefined){
      this.router.navigate(['login'])
      
    }

    else{
      
      this.cartService.addtoCart(product)
      this.notify.showSuccess("Product added to cart succesfully","Added")

      }
  
 }
 addToWhishlist(product:any):void{
   if(this.uid==undefined){
     this.router.navigate(['login'])
   }
   else{this.whishlist.addtoWhishlist(product)
      this.notify.whishlistSuccess("Product added to whishlist successfully","Success")}
 }
 searchvalue(productName:any){
  this.itemname=productName.value
}

  }
  

