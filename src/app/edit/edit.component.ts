import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../models/product.interface';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userArray:any=[]
  form
  id!:string
  ref:undefined|string|null
  items:{name?:string,image?:string,category?:string,subcategory?:string,price?:number}[]=[]
  data:product={}
  displaycolumns:['category,subcategory,name,price']
 listData:any;
  constructor(private fb:FormBuilder,private backend:BackendService,private router:Router,private route:ActivatedRoute) { 
    {
      this.listData=[];
      this.form=fb.group({
        name:[],
        category:[],
        subcategory:[],
        price:[],
        image:[]
      })
  }
}
category:string[]=['Men','Women','Children']
  subcategory:string[]=['Partywear','Sportswear']
  ngOnInit(): void {
    this.id=this.route.snapshot.queryParams['id']
    this.backend.getSpecificData(this.id).subscribe(res=>{
      this.form.controls['name'].setValue(res.name)
      this.form.controls['category'].setValue(res.category)
      this.form.controls['subcategory'].setValue(res.subcategory)
      this.form.controls['price'].setValue(res.price)
      this.form.controls['image'].setValue(res.image)
    })
  }
  onSubmit(){
    this.data={
      id:this.id,
      name:this.form.controls['name'].value,
      image:this.form.controls['image'].value,
      price:this.form.controls['price'].value,
      category:this.form.controls['category'].value,
      subcategory:this.form.controls['subcategory'].value
  }
  this.backend.setData(this.data).then(()=>this.router.navigate(['setproducts']))
}

  updateItem(){
  
  }
}