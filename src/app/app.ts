import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConferenceDetail } from './components/conference-detail/conference-detail';
import { ConferenceList } from './components/conference-list/conference-list';
import { Footer } from './components/footer/footer';
import { Friends } from './components/friends/friends';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { Profil } from './components/profil/profil';
import { Conference } from './model/conference';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    Friends,
    Footer,
    Profil,
    Notifications,
    ConferenceList,
    ConferenceDetail,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedConference: Conference | null = null;
}
