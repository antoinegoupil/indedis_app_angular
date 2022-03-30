import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imgageBasePath = environment.apiUrl + '/public/';
  products: Product[] = [];

  constructor(private commerceService: CommerceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.commerceService.getHome().subscribe((data) => {
      this.products = data.products;
    });
  }
}
