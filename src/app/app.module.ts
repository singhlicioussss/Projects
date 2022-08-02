import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopelloModule } from './material module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FootComponent } from './foot/foot.component';
import { SetproductsComponent } from './setproducts/setproducts.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import {AngularFireModule} from '@angular/fire/compat';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { CheckoutComponent } from './checkout/checkout.component';
import { SortPipe } from './sort.pipe';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { EditComponent } from './edit/edit.component'; 
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [AppComponent, HomeComponent, FootComponent, SetproductsComponent, UserloginComponent, UserregComponent, AdminComponent, ProductsComponent, NavComponent, CartComponent, CheckoutComponent, SortPipe, WhishlistComponent, EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShopelloModule,FormsModule,MatDatepickerModule,FlexLayoutModule,
    ReactiveFormsModule,Ng2SearchPipeModule,ToastrModule.forRoot(
    ),
   AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
