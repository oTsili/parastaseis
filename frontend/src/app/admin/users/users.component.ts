import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from 'src/app/user/interfaces/user.interface';
import { UserTotal } from '../../user/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserTotal[];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  makeAdmin(user: UserTotal) {
    this.usersService.updateUser(user, 'admin').subscribe({
      next: (response) => {
        this.getUsers();
        // console.log({ response });
      },
    });
  }

  makeUser(user: UserTotal) {
    this.usersService.updateUser(user, 'user').subscribe({
      next: (response) => {
        this.getUsers();
        // console.log({ response });
      },
    });
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        // console.log({ response });
        this.users = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
