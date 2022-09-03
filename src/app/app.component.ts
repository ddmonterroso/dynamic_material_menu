import { Component } from '@angular/core';
import { NestedItem } from './nested-menu/nested-item';
import products from '../assets/products.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: NestedItem[] = [];

  ngOnInit() {
    this.load();
  }

  load() {
    // Transform data provided to nested collection with children format
    this.items = products.map((item: NestedItem) => {
      item.children = products.filter((_item: any) => _item?.parentId == item?.id)
      return item;
    }).filter((i: any) => !i.parentId)
  }


}
