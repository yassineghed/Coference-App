import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifList = [
    { id: 1, message: 'You have a new message' },
    { id: 2, message: 'Your profile has been updated' },
    { id: 3, message: 'You have a new friend request' },
  ];

  
  show = false;
  btnTest = 'Show Notifications';
  ShowNotifications() {
    this.show = !this.show;
    this.btnTest = this.show ? 'Hide Notifications' : 'Show Notifications';
  }
}
