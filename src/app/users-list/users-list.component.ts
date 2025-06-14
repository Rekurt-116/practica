import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AsyncPipe, NgForOf} from '@angular/common';
import {UserCardComponent} from './user-card/user-card.component';
import {UsersComponent} from '../services/users.component';
import {UsersApiComponent} from '../services/users-api.component';
import {Users} from '../interfaces/users.interface';

@Component({
  selector: 'app-users-list',
  imports: [
    NgForOf,
    AsyncPipe,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {

  readonly usersApiComponent = inject(UsersApiComponent)
  readonly usersComponent = inject(UsersComponent)

  constructor() {
    this.usersApiComponent.getUsers().subscribe(
      (users: Users[]) => {
        this.usersComponent.setUsers(users)
      }
    )
  }

  deleteUser(id: number):void {
    this.usersComponent.deleteUser(id)
  }

}
