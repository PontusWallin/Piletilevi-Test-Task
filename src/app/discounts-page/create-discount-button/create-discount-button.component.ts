import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {CreateDiscountModalComponent} from '../discount-filters/create-discount-modal/create-discount-modal.component';

@Component({
  selector: 'app-create-discount-button',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './create-discount-button.component.html',
  styleUrl: './create-discount-button.component.scss'
})
export class CreateDiscountButtonComponent {
  constructor(public dialog: MatDialog) {
  }

  openCreateDiscountModal() {
    if (this.dialog.openDialogs.length > 0) {
      return;
    }

    this.dialog.open(CreateDiscountModalComponent, {
      height: '250px',
      width: '540px',
      disableClose: false,
      hasBackdrop: true,
    });
  }
}
