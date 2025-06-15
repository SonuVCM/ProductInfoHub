import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], searchText: string): any[] {
    if (!products) return [];
    if (!searchText) return products;

    searchText = searchText.toLowerCase();

    return products.filter(item =>
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText)
    );
  }
}