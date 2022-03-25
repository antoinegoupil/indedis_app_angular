import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductComponent } from './components/product/product.component';
import { CommerceRoutingModule } from './commerce-routing.module';

@NgModule({
  declarations: [HomeComponent, ListProductComponent, ProductComponent],
  imports: [CommonModule, CommerceRoutingModule],
})
export class CommerceModule {}
