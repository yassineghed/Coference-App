import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Conference } from '../../model/conference';

@Component({
  selector: 'app-conference-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './conference-detail.html',
  styleUrl: './conference-detail.css',
})
export class ConferenceDetail {
  @Input() conference: Conference | null = null;
}
