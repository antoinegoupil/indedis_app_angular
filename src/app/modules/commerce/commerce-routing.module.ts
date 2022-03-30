import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './container/basket/basket.component';
import { HomeComponent } from './container/home/home.component';
import { ListProductComponent } from './container/list-product/list-product.component';
import { ProductComponent } from './container/product/product.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ListProductComponent },
  {
    path: 'products/:id',
    component: ProductComponent,
    resolve: { product: ProductResolver },
  },
  {
    path: 'basket',
    component: BasketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceRoutingModule {}
