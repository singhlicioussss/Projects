import { Component, OnInit } from '@angular/core';
import { WhishlistService } from '../whishlist.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {
  filterItems:{name?:string,image?:string,category?:string,subcategory?:string,price?:number}[]=[]
  itemname:string='';
  product:any=[];
  total:number=0;
   constructor(private whishlistservice:WhishlistService){

   }
  ngOnInit(): void {
    this.whishlistservice.getProducts().subscribe(res=>{
      this.product=res;
    })

    }
   
  }
