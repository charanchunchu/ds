import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plant-popup',
  templateUrl: './plant-popup.component.html',
  styleUrls: ['./plant-popup.component.scss']
})
export class PlantPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PlantPopupComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
