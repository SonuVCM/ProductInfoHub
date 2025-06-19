import { Component } from '@angular/core';
// @ts-ignore
// import products from '../../data/products.json';
import jsonData from '../../data/products.json';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
   searchText: string = '';
  products: any[] = jsonData.products;


}
