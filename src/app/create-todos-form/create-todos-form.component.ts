import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-create-todos-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss'
})
export class CreateTodosFormComponent {

  @Output()
  createTodo = new EventEmitter()

  public readonly form = new FormGroup({
    'title': new FormControl('', [Validators.required]),
    'completed': new FormControl('', [Validators.required]),
  })

  submitForm() {
    this.createTodo.emit(this.form.value)
    this.form.reset()
  }

  constructor() {
    this.form.valueChanges
      .pipe(
        debounceTime(1000),
      )
      .subscribe(
        (item: any) => console.log(item)
      )
  }

}
