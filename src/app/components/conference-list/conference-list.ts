import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../model/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  @Output() conferenceSelected = new EventEmitter<Conference>();

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des technologies web modernes.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      id: 4,
      title: 'TypeScript Day',
      description: 'Édition 2025, déjà terminée.',
      date: new Date(2025, 4, 10),
      place: 'Monastir',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ];

  searchTerm = '';

  get upcomingConferences(): Conference[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.conferences.filter((conference) => conference.date >= today);
  }

  get filteredConferences(): Conference[] {
    const term = this.searchTerm.toLowerCase().trim();

    return this.upcomingConferences.filter((conference) =>
      conference.title.toLowerCase().includes(term),
    );
  }

  remainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  register(conference: Conference): void {
    if (this.remainingPlaces(conference) > 0) {
      conference.nbParticipants++;
    }
  }

  selectConference(conference: Conference): void {
    this.conferenceSelected.emit(conference);
  }
}
