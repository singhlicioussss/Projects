import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { SetproductsComponent } from './setproducts/setproducts.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminGuard } from './services/admin.guard';



const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['login'])
// const redirectAutrhorise=()=>re

const redirectLoggedInToHome=()=>redirectLoggedInTo([''])

const routes: Routes = [
  {
    path:'cart',pathMatch:'full',component:CartComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path:'products',component:ProductsComponent,
  },
   { path:'setproducts',component:SetproductsComponent,
      canActivate:[AdminGuard]
  },
  {
    path:'whishlist',component:WhishlistComponent
  },
  {
    path:'edit',component:EditComponent
  },
  {
    path:'whishlist',component:WhishlistComponent
  },
  {
    path:'admin',component:AdminComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path:'login',component:UserloginComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path:'reg',component:UserregComponent
  },
  {
    path:'success',component:UserloginComponent
  },
  {
    path:'checkout',component:CheckoutComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path:'',component:HomeComponent
    
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
