import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {DiscountsService} from '../discounts.service';

@Component({
  selector: 'app-discount-table-paginator',
  standalone: true,
  imports: [
    MatPaginator
  ],
  templateUrl: './discount-table-paginator.component.html',
  styleUrl: './discount-table-paginator.component.scss'
})
export class DiscountTablePaginatorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() paginatorChange = new EventEmitter<MatPaginator>();
  @Input() pageSize = 10;

  protected length = 100;

  constructor(private discountsService: DiscountsService) {}

  ngOnInit() {
    this.discountsService.getDiscountsLength().subscribe(
      length => this.length = length
    );
  }

  onPage($event: PageEvent) {
    let offset = $event.pageIndex * $event.pageSize;
    let limit = $event.pageSize;
    this.discountsService.loadDiscounts(offset, limit).subscribe();
  }
}
