import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductModel } from '../models/product-model';
import { FakeApiService } from '../services/fake-api.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  products!: ProductModel[];

  constructor() {}

  ngOnInit() {}
}
