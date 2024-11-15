import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTextColumn
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-discounts-table',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatTextColumn,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef
  ],
  templateUrl: './discounts-table.component.html',
  styleUrl: './discounts-table.component.scss'
})
export class DiscountsTableComponent implements OnChanges {
  @Input() displayedDiscounts: any[] = [];
  @Input() set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  displayedColumns: string[] = ['name', 'appliesTo', 'timePeriod', 'discountAmount'];
  dataSource = new MatTableDataSource<any>(this.displayedDiscounts);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['displayedDiscounts']) {
      this.dataSource.data = this.displayedDiscounts;
    }
  }
}
