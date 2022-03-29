import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceRoutingModule {}
