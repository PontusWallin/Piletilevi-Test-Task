import {Component, OnInit} from '@angular/core';
import {DiscountsTableComponent} from './discounts-table/discounts-table.component';
import {DiscountTableTabsComponent} from './discount-table-tabs/discount-table-tabs.component';
import {DiscountsService} from './discounts.service';
import {MatPaginator} from '@angular/material/paginator';
import {DiscountTablePaginatorComponent} from './discount-table-paginator/discount-table-paginator.component';
import {DiscountFiltersComponent} from '../discount-filters/discount-filters.component';

@Component({
  selector: 'app-discount-table-container',
  standalone: true,
  imports: [
    DiscountsTableComponent,
    DiscountTableTabsComponent,
    DiscountTablePaginatorComponent,
    DiscountFiltersComponent,
    MatPaginator,
  ],
  providers: [DiscountsService],
  templateUrl: './discount-table-container.component.html',
  styleUrl: './discount-table-container.component.scss'
})
export class DiscountTableContainerComponent implements OnInit {
  protected discounts: any[] = [];
  protected paginator!: MatPaginator;

  constructor(private discountsService: DiscountsService) {
  }

  ngOnInit() {
    this.discountsService.getDisplayedDiscounts().subscribe(
      discounts => {
        discounts.forEach(discount => {
          discount.appliesTo = discount.category;
          discount.timePeriod = discount.startDate + ' - ' + discount.endDate;
          discount.amount = discount.discountAmount + '€';
        });
        this.discounts = discounts;
      }
    )
  }

  onPaginatorChange(paginator: MatPaginator) {
    this.paginator = paginator;
  }
}
