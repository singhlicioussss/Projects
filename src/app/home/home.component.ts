import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { UserloginService } from '../services/userlogin.service';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user$:User|null
  items:{name?:string,image?:string,category?:string,subcategory?:string,price?:number}[]=[]
  authUser:{name?:string|null}={}
  count=0;
  subcategory:['Partywear','Sportswear']
  filterItems:{name?:string,image?:string,category?:string,subcategory?:string,price?:number}[]=[]
  name=''
  constructor(private auth:UserloginService,private product:BackendService,private route:ActivatedRoute) {
    auth.auth$.subscribe(res=>{
      this.user$=res
      
    })
    this.route.queryParams.subscribe(res=>{
      this.name=res['category']
      
    })
   }
   // filter items because if we are not giving anything in the category than filter will work
  selected:any;
  ngOnInit(): void {
    this.product.getData().subscribe(res=>{
      this.filterItems=this.items=res
    })
  }
  logout(){
    this.auth.logout()
  }
  getProducts(){
    this.filterItems=this.name?
    this.items.filter(res=>{
      res.category?.toLowerCase()?.includes(this.name.toLowerCase())}):this.items
  }
}

  


