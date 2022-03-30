import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home/home.component';
import { ListProductComponent } from './container/list-product/list-product.component';
import { ProductComponent } from './container/product/product.component';
import { CommerceRoutingModule } from './commerce-routing.module';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { CardListProductComponent } from './components/card-list-product/card-list-product.component';
import { BasketComponent } from './container/basket/basket.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListProductComponent,
    ProductComponent,
    FilterBarComponent,
    CardListProductComponent,
    BasketComponent,
  ],
  imports: [CommonModule, CommerceRoutingModule],
})
export class CommerceModule {}
