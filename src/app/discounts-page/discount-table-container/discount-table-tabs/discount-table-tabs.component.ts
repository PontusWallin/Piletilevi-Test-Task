import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {DiscountsService, DiscountState} from '../discounts.service';

@Component({
  selector: 'app-discount-table-tabs',
  standalone: true,
  imports: [
    MatTabsModule,
  ],
  templateUrl: './discount-table-tabs.component.html',
  styleUrl: './discount-table-tabs.component.scss'
})
export class DiscountTableTabsComponent {
  protected activeTab = 0;

  constructor(
    private discountsService: DiscountsService,
  ) {}

  onTabChange(index: number) {
    this.discountsService.setDisplayedDiscountState(
      this.getStateFromActiveTab(index)
    );
  }

  getStateFromActiveTab(index: number): DiscountState {
    switch (index) {
      case 0:
        return DiscountState.ACTIVE;
      case 1:
        return DiscountState.UPCOMING;
      case 2:
        return DiscountState.ARCHIVED
      default:
        return DiscountState.ACTIVE;
    }
  }
}
