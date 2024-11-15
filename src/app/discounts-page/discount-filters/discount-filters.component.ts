import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DiscountSearchFieldComponent} from './discount-search-field/discount-search-field.component';
import {DiscountTypeDropdownComponent} from './discount-type-dropdown/discount-type-dropdown.component';
import {DiscountSearchButtonComponent} from './discount-search-button/discount-search-button.component';
import {
  DiscountFilterClearButtonComponent
} from './discount-filter-clear-button/discount-filter-clear-button.component';

@Component({
  selector: 'app-discount-filters',
  standalone: true,
  imports: [
    FormsModule,
    DiscountSearchFieldComponent,
    DiscountTypeDropdownComponent,
    DiscountSearchButtonComponent,
    DiscountFilterClearButtonComponent
  ],
  templateUrl: './discount-filters.component.html',
  styleUrl: './discount-filters.component.scss'
})
export class DiscountFiltersComponent {

}
