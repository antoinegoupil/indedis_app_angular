import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-list-product',
  templateUrl: './card-list-product.component.html',
  styleUrls: ['./card-list-product.component.scss'],
})
export class CardListProductComponent implements OnInit {
  imgageBasePath = environment.apiUrl + '/public/';
  @Input() product!: Product;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  detailProduct(idProduct: number) {
    this.router.navigate(['products', idProduct]);
  }
}
