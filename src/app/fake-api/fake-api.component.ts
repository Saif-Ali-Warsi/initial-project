import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { FakeApiService } from '../services/fake-api.service';

@Component({
  selector: 'fake-api',
  templateUrl: './fake-api.component.html',
  styleUrls: ['./fake-api.component.scss'],
})
export class FakeApiComponent implements OnInit {
products!:ProductModel[];

  constructor(private fakeservice: FakeApiService) {
   
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.fakeservice.getProducts().subscribe(products => {      
      this.products = products;
    });
  }
}
