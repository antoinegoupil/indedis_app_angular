import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';
import { ProductFilterDto } from '../dto/product-filter.dto';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  constructor(private httpClient: HttpClient) {}

  getProduct(filter: ProductFilterDto): Observable<Product[]> {
    const params = new HttpParams({
      fromObject: { ...filter },
    });
    return this.httpClient.get<Product[]>(environment.apiUrl + '/products', {
      params,
    });
  }
}
