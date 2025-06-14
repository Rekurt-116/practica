import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../interfaces/users.interface';

@Injectable({providedIn: 'root'})

export class UsersApiComponent {

  readonly http = inject(HttpClient)

  getUsers() {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
