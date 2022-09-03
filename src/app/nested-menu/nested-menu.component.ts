import { Component, Input, ViewChild } from '@angular/core';
import { NestedItem } from './nested-item';


@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent  {
  @Input() items: NestedItem[];
  @ViewChild('childMenu', {static: true}) public childMenu: any;
}


