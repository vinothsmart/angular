import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar || DUMMY_USERS[randomIndex()].avatar;
  }

  onUserClick() {
    console.log(`User clicked: ${this.name}`);
  }
}
