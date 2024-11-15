import {Component} from '@angular/core';
import {MatDialogContent, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-create-discount-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDialogContent,
    FormsModule,
    MatIcon
  ],
  templateUrl: './create-discount-modal.component.html',
  styleUrl: './create-discount-modal.component.scss'
})
export class CreateDiscountModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateDiscountModalComponent>,
  ) {
  }

  close(): void {
    this.dialogRef.close();
  }
}
