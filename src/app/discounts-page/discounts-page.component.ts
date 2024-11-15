import {Component} from '@angular/core';
import {CreateDiscountButtonComponent} from './create-discount-button/create-discount-button.component';
import {DiscountTableContainerComponent} from './discount-table-container/discount-table-container.component';

@Component({
  selector: 'app-discounts-page',
  standalone: true,
  imports: [
    CreateDiscountButtonComponent,
    DiscountTableContainerComponent
  ],
  templateUrl: './discounts-page.component.html',
  styleUrl: './discounts-page.component.scss'
})
export class DiscountsPageComponent {
}
