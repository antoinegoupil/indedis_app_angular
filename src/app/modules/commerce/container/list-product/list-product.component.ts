import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';
import { ProductFilterDto } from '../../dto/product-filter.dto';
import { CommerceService } from '../../services/commerce.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];



  constructor(
    private route: ActivatedRoute,
    private commerceService: CommerceService
  ) {}

  ngOnInit(): void {
    this.getFilter();
  }

  getFilter() {
    this.route.queryParams.subscribe((data: ProductFilterDto) => {
      this.getData(data);
    });
  }

  getData(filter: ProductFilterDto) {
    this.commerceService.getProducts(filter).subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
