import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ListProductComponent },
  { path: 'products/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceRoutingModule {}
