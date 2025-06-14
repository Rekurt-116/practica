import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, UsersListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practica';

}
