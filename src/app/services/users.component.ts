import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Users} from '../interfaces/users.interface';

@Injectable({providedIn: 'root'})

export class UsersComponent {

  private readonly _users$: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([])
  public readonly users$: Observable<Users[]> = this._users$.asObservable()

  setUsers(users: Users[]): void {
    this._users$.next(users)
  }

  deleteUser(id: number) {
    this._users$.next(
      this._users$.value.filter(
        (user: Users) => user.id === id ? false: true
      )
    )
  }

  editUser(editedUser: Users) {
    this._users$.next(
      this._users$.value.map(
        (user: Users) => {
          if (user === editedUser ) {
            return editedUser
          }else {
            return user
          }
        }
      )
    )
  }

  createUser(user: Users):void {
    this._users$.next([...this._users$.value, user])
  }



}
