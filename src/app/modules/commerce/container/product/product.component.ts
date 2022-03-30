import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: Product;
  constructor(private activatedRoute: ActivatedRoute) {}
  imgageBasePath = environment.apiUrl + '/public/';
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.activatedRoute.data.subscribe((data: Data) => {
      // console.log(data);
      this.product = data['product'];
    });
  }
}
