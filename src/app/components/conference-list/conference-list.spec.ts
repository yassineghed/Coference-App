import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConferenceList } from './conference-list';

describe('ConferenceList', () => {
  let fixture: ComponentFixture<ConferenceList>;
  let component: ConferenceList;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ConferenceList] }).compileComponents();
    fixture = TestBed.createComponent(ConferenceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows upcoming conferences and excludes the past conference', () => {
    expect(component.upcomingConferences.map((conference) => conference.id)).toEqual([1, 2, 3]);
  });

  it('filters titles case-insensitively and resets for an empty search', () => {
    component.searchTerm = 'sIgNaLs';
    expect(component.filteredConferences.map((conference) => conference.id)).toEqual([2]);

    component.searchTerm = '';
    expect(component.filteredConferences).toHaveLength(3);
  });

  it('registers a participant and updates the remaining places', () => {
    const workshop = component.conferences.find((conference) => conference.id === 2)!;
    component.register(workshop);

    expect(workshop.nbParticipants).toBe(25);
    expect(component.remainingPlaces(workshop)).toBe(5);
  });

  it('does not register beyond the maximum capacity', () => {
    const fullConference = component.conferences.find((conference) => conference.id === 3)!;
    component.register(fullConference);

    expect(fullConference.nbParticipants).toBe(50);
  });

  it('selects a conference when the card is clicked without changing its style', () => {
    const selectedSpy = vi.fn();
    component.conferenceSelected.subscribe(selectedSpy);
    fixture.nativeElement.querySelector('.conf-card').click();
    fixture.detectChanges();

    expect(selectedSpy).toHaveBeenCalledWith(component.conferences[0]);
    expect(fixture.nativeElement.querySelector('.conf-card').classList).not.toContain('selected');
  });

  it('emits a selected conference when its title button is clicked', () => {
    const selectedSpy = vi.fn();
    component.conferenceSelected.subscribe(selectedSpy);
    fixture.nativeElement.querySelector('.select-conference').click();

    expect(selectedSpy).toHaveBeenCalledTimes(1);
    expect(selectedSpy).toHaveBeenCalledWith(component.conferences[0]);
  });

  it('shows an empty-state message when there are no upcoming conferences', () => {
    component.conferences = [];
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Aucune conférence à venir n’est disponible.');
  });
});
