export class ProductModel {
  id!: number;
  title!: string;
  price!: number;
  description!: string;
  category!: string;
  image!: string;
  rating!: Rating;
}

export class Rating {
  count!: number;
  rate!: number;
}
