import {Component} from '@angular/core';
import {DiscountsService} from '../../discount-table-container/discounts.service';

@Component({
  selector: 'app-discount-filter-clear-button',
  standalone: true,
  imports: [],
  templateUrl: './discount-filter-clear-button.component.html',
  styleUrl: './discount-filter-clear-button.component.scss'
})
export class DiscountFilterClearButtonComponent {

  constructor(private discountsService: DiscountsService) {}

  clearAllDiscountFilters() {
    this.discountsService.clearAllFilters();
  }
}
