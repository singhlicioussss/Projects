import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form:FormGroup
  data:any
  constructor(private fb:FormBuilder,private order:OrderService) {
   this.form=fb.group({
     name:[,Validators.required],
     email:[,Validators.required],
     address:[,Validators.required],
     state:[,Validators.required],
     city:[,Validators.required]
   })
   }

  ngOnInit(): void {
  
  }
  onSubmit(){
    if(this.form.valid){
      this.order.setOrder(this.form.value)
    }
  }

}
