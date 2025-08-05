import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

// type UserType = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface UserType {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({
    required: true,
  })
  user!: UserType;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return (
      'assets/users/' + this.user.avatar || DUMMY_USERS[randomIndex()].avatar
    );
  }

  onUserClick() {
    this.select.emit(this.user.id);
  }
}
