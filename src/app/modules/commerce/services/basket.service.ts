import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductBasketDto } from '../dto/product-basket.dto';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _products = new BehaviorSubject<ProductBasketDto[]>([]);

  constructor() {}

  get products() {
    return this._products.asObservable();
  }

  add(productBasket: ProductBasketDto) {
    this._products.value.push(productBasket);
  }

  clear() {
    this._products.next([]);
  }
}
