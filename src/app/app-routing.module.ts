import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HowtobuyComponent } from './howtobuy/howtobuy.component';
import { ProductsComponent } from './products/products.component';
import { WhoComponent } from './who/who.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'who', component: WhoComponent },
  { path: 'howto', component: HowtobuyComponent },
  { path: '', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
