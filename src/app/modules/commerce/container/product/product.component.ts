import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';
import { ProductBasketDto } from '../../dto/product-basket.dto';
import { BasketService } from '../../services/basket.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  imgageBasePath = environment.apiUrl + '/public/';
  product!: Product;
  amount: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.product = data['product'];
    });
  }

  addBasket() {
    const productBasket: ProductBasketDto = {
      product: this.product,
      amount: this.amount,
    };

    this.basketService.add(productBasket);
  }
}
