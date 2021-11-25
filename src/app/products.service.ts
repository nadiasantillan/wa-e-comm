import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Product } from './product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private configService: ConfigService, private http: HttpClient) { }

  products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.configService.productsApiUrl()).pipe(map(products => products.filter(product => product.stock > 0)));
  }
}
