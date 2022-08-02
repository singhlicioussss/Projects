import { Component } from '@angular/core';
import { UserloginService } from './services/userlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopello';
  constructor(private auth:UserloginService){
  console.log(this.auth.auth$?'true':'false')
  }
}
