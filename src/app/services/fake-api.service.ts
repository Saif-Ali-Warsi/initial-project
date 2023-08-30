import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  constructor(private http: HttpClient) {}


  productsUrl: string = 'https://fakestoreapi.com/products';

  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`{${this.productsUrl}/${id}`);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.productsUrl}`);
  }
}
