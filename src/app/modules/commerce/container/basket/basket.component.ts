import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';
import { ProductBasketDto } from '../../dto/product-basket.dto';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  imgageBasePath = environment.apiUrl + '/public/';
  totalPrice: number = 0;
  products: ProductBasketDto[] = [];

  subscriptions: Subscription[] = [];
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    // this.getData();
    this.products = [
      {
        product: {
          id: 68,
          name: 'Caramels surprenants : Coffret',
          description: 'Une saveur surprenante',
          price: 3.8,
          imageName: 'coffret_surprenant.png',
        },
        amount: 2,
      },
      {
        product: {
          id: 69,
          name: "La gourmandise du pain d'épices : Coffret",
          description: 'Pour les gros gourmands',
          price: 3.8,
          imageName: 'coffret_pain_depice.png',
        },
        amount: 1,
      },
    ];
    this.totalPrice = this.getTotalPrice(this.products);
  }

  getData() {
    this.subscriptions.push(
      this.basketService.products.subscribe((data) => {
        this.products = data;
      })
    );
  }

  getTotalPrice(products: ProductBasketDto[]) {
    const price = products.reduce(
      (acc, val) => acc + val.product.price * val.amount,
      0
    );

    return Math.round((price + Number.EPSILON) * 100) / 100;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
