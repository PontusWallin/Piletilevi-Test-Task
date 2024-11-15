import { Component } from '@angular/core';
import {DiscountsService} from '../../discount-table-container/discounts.service';

@Component({
  selector: 'app-discount-search-button',
  standalone: true,
  imports: [],
  templateUrl: './discount-search-button.component.html',
  styleUrl: './discount-search-button.component.scss'
})
export class DiscountSearchButtonComponent {

  constructor(private discountsService: DiscountsService) {
  }

  doSearch() {
    this.discountsService.doSearch();
  }
}
