import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';
import { HomeDto } from '../dto/home.dto';
import { ProductFilterDto } from '../dto/product-filter.dto';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  constructor(private httpClient: HttpClient) {}

  getProducts(filter: ProductFilterDto): Observable<Product[]> {
    const params = new HttpParams({
      fromObject: { ...filter },
    });
    return this.httpClient.get<Product[]>(environment.apiUrl + '/products', {
      params,
    });
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(environment.apiUrl + '/products/' + id);
  }

  getHome() {
    return this.httpClient.get<HomeDto>(environment.apiUrl + '/home');
  }
}
