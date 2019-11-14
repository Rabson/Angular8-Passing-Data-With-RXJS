import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [{
  path: '', component: ProductComponent
},
{
  path: 'cart-detail', component: CartDetailComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
