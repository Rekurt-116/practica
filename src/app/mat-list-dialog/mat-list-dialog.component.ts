import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Material } from '../interfaces/material.interface';

@Component({
  selector: 'app-mat-list-dialog',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './mat-list-dialog.component.html',
  styleUrl: './mat-list-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatListDialogComponent {

  readonly data = inject<{material: Material}>(MAT_DIALOG_DATA)

  public readonly form = new FormGroup({
    id: new FormControl(this.data.material.id, [Validators.required]),
    title: new FormControl(this.data.material.title, [Validators.required]),
    body: new FormControl(this.data.material.body, [Validators.required]),
  })


}
