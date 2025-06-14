import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {CreateTodosFormComponent} from '../create-todos-form/create-todos-form.component';

@Component({
  selector: 'app-todos-list',
  imports: [
    NgForOf,
    CreateTodosFormComponent,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  readonly http = inject(HttpClient)

  todos: any = []

  constructor() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (response: any) => this.todos = response
    )
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(
      (user: any) => user.id === id ? false: true
    )
  }

  createTodo(todo: any) {
    const ujeEst = this.todos.find(
      (item: any) => item.id === todo.id
    )

    if(ujeEst !== undefined) {
      console.log('Ошибка')
    }
    else{
      console.log('Успешно создан')
      this.todos = [...this.todos, todo]
    }
  }

}
