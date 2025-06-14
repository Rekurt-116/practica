import { Routes } from '@angular/router';
import {TodosListComponent} from './todos-list/todos-list.component';
import {UsersListComponent} from './users-list/users-list.component';
import {MatListComponent} from './mat-list/mat-list.component';

export const routes: Routes = [
  {
    path: 'todos',
    component: TodosListComponent
  },
  {
    path: 'posts',
    component: UsersListComponent
  },
  {
    path: 'material',
    component: MatListComponent
  }
];
