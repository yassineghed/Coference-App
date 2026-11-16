import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Friends } from './components/friends/friends';
import { Footer } from './components/footer/footer';
import { Profil } from './components/profil/profil';
import { Notifications } from './components/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Friends, Footer, Profil, Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "conf";
  
}
