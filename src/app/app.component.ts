import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {DiscountsPageComponent} from './discounts-page/discounts-page.component';
import {DiscountFiltersComponent} from './discounts-page/discount-filters/discount-filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DiscountFiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Piletilevi-Test-Task';
}
