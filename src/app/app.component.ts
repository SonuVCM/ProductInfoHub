import { Component } from '@angular/core';
import  jsonData  from './data/products.json'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ProductInfoHub';
  searchText: string = '';
  products: any[] = jsonData.products;


}
