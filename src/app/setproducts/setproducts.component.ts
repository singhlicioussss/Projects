import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { product } from '../models/product.interface';
import { BackendService } from '../services/backend.service';
import { NotificationsService } from '../services/notifications.service';
import { UserloginService } from '../services/userlogin.service';




@Component({
  selector: 'app-setproducts',
  templateUrl: './setproducts.component.html',
  styleUrls: ['./setproducts.component.scss']
})

export class SetproductsComponent implements OnInit {
  userArray:any=[]
  form:FormGroup;
  ref:undefined|string|null
  items:product[]=[]
  data:product
  displaycolumns:['category,subcategory,name,price']
 listData:any;

  constructor(private firestore:AngularFirestore,fb:FormBuilder,private product:BackendService,private afs:Firestore,private auth:UserloginService,
    private backend:BackendService,private notify:NotificationsService) {
    this.listData=[];
    this.form=fb.group({
      name:[],
      category:[],
      subcategory:[],
      price:[],
      image:[]
    })
    this.auth.auth$.subscribe(res=>{
      this.ref=res?.email
    }
      )
   }
  category:string[]=['Men','Women','Children']
  subcategory:string[]=['Partywear','Sportswear']
  // category:any=[]
  // subcategory:any=[]
  async ngOnInit(): Promise<void> {
    this.firestore.collection('users').get().subscribe((data)=>{
      for (let i=0;i<data.docs.length;i++){
        this.userArray.push(data.docs[i].data())
      }
    })
    this.product.getData().subscribe(res=>{
      this.items=res
    })
    // this.category= await this.backend.categoryName(); 
    // this.subcategory= await this.backend.subcategoryName();  
  }
  onSubmit(){
      this.data={name:this.form.controls['name'].value,
      image:this.form.controls['image'].value,
      price:this.form.controls['price'].value,
      category:this.form.controls['category'].value,
      subcategory:this.form.controls['subcategory'].value
      
     }
      
     this.product.putData(this.data)

    }
    addItem():void{
      this.listData.push(this.form.value)
      this.notify.dataAdded("Data added successfully","Added")
    }
    reset(){
      this.form.reset();
    }
    remove(id:string)
    {
      this.backend.remove(id)
      this.notify.remData("Data removed successfully","Removed")
    }
}

