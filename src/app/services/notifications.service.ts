import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toster:ToastrService) { }
  showSuccess(message:any,title:any){
    this.toster.success(message,title)
  }
  whishlistSuccess(message:any,title:any){
    this.toster.success(message,title)
  }
  loginSuccess(message:any,title:any){
    this.toster.success(message,title)
  }
  loginError(message:any,title:any){
    this.toster.error(message,title)
  }
  regSuccess(message:any,title:any){
    this.toster.success(message,title)
  }
  remData(message:any,title:any){
    this.toster.success(message,title)
  }
  dataAdded(message:any,title:any){
    this.toster.success(message,title)
  }
}
