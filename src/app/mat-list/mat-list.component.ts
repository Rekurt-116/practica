import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatListDialogComponent} from '../mat-list-dialog/mat-list-dialog.component';
import {UsersApiComponent} from '../services/users-api.component';
import {UsersComponent} from '../services/users.component';
import {AsyncPipe, NgForOf} from '@angular/common';
import {Users} from '../interfaces/users.interface';

@Component({
  selector: 'app-mat-list',
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './mat-list.component.html',
  styleUrl: './mat-list.component.scss'
})
export class MatListComponent {

  readonly usersApiComponent = inject(UsersApiComponent)
  readonly usersComponent = inject(UsersComponent)
  readonly dialog = inject(MatDialog)

  constructor() {
    this.usersApiComponent.getUsers().subscribe(
      (item: any) => {
        this.usersComponent.setUsers(item)
      }
    )
  }

  deletePost(id: number) {
    this.usersComponent.deleteUser(id)
  }

  editPost(id: any) {
    this.usersComponent.editUser(id)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatListDialogComponent, {
      data: {name: this.usersComponent.users$},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.usersComponent.editUser(result)
      console.log('The dialog was closed', result);
    });
  }

}
