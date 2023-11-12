// src/app/components/dialog/add-client-dialog/add-client-dialog.component.ts

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css'],
})
export class AddClientDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddClientDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
