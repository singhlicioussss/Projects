import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../models/cart.interface';
import { CartService } from '../services/cart.service';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product:any=[];
  total:number;
   constructor(private cartservice:CartService,private router:Router){

   }
   
   nav(){
     this.router.navigate(['checkout'])
   }
  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.product=res;
      
    })
      this.total=this.cartservice.getTotalPrice();
    }
   remove(product:any){
     this.cartservice.removeItem(this.product);
   }
   
  }

