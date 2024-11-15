import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DiscountsService} from '../../discount-table-container/discounts.service';

@Component({
  selector: 'app-discount-type-dropdown',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf,
    NgClass
  ],
  templateUrl: './discount-type-dropdown.component.html',
  styleUrl: './discount-type-dropdown.component.scss'
})
export class DiscountTypeDropdownComponent implements OnInit {
  options = ['All events', 'Ticket type', 'Event', 'Series'];
  selectedOptions: string[] = [];
  isDropdownOpen = false;

  constructor(
    private discountsService: DiscountsService,
    private eRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.discountsService.getFiltersCleared().subscribe(() => {
      this.selectedOptions = [];
    });
  }

  isSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }

  toggleOption(option: string) {
    if (this.isSelected(option)) {
      this.selectedOptions = this.selectedOptions.filter(selectedOption => selectedOption !== option);
    } else {
      this.selectedOptions.push(option);
    }
    this.discountsService.setDiscountTypes(this.selectedOptions);
  }

  // Close the dropdown when clicking outside of it
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}
