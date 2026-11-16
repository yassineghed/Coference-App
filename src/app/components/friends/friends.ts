import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friendsList = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', email: 'charlie@example.com' },
    { name: 'David', age: 35, email: 'david@example.com' },
    { name: 'Eve', age: 28, email: 'eve@example.com' }];
}
