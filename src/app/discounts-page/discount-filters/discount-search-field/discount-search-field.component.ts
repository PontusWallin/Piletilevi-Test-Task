import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {DiscountsService} from '../../discount-table-container/discounts.service';

@Component({
  selector: 'app-discount-search-field',
  standalone: true,
  imports: [
    FaIconComponent,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './discount-search-field.component.html',
  styleUrl: './discount-search-field.component.scss'
})
export class DiscountSearchFieldComponent implements OnInit {
  faSearch = faSearch;
  faTimes = faTimes;

  inputValue = '';

  constructor(private discountsService: DiscountsService) {}

  ngOnInit() {
        this.discountsService.getFiltersCleared().subscribe(() => {
          this.clearInput();
        });
    }

  clearInput() {
    this.inputValue = '';
    this.discountsService.setSearchQuery(
      this.inputValue
    );
    this.discountsService.doSearch();
  }

  onInputChange() {
    this.discountsService.setSearchQuery(this.inputValue);
  }
}
