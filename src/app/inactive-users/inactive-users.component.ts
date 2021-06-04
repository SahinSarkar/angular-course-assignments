import {Component} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.usersService.inactiveUsers;

  constructor(private usersService: UsersService) {
  }

  onSetToActive(id: number) {
    this.usersService.moveUserToActive(id);
  }
}
