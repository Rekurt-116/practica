import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';

@Component({
  selector: 'app-mat-list-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogClose
  ],
  templateUrl: './mat-list-dialog.component.html',
  styleUrl: './mat-list-dialog.component.scss'
})
export class MatListDialogComponent {

  readonly data = inject(MAT_DIALOG_DATA)

  public readonly form = new FormGroup({
    'id': new FormControl(this.data.name.id, [Validators.required]),
    'title': new FormControl(this.data.name.title, [Validators.required]),
    'body': new FormControl(this.data.name.body, [Validators.required]),
  })


}
