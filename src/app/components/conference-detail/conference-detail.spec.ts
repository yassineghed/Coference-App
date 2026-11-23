import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConferenceDetail } from './conference-detail';

describe('ConferenceDetail', () => {
  let fixture: ComponentFixture<ConferenceDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ConferenceDetail] }).compileComponents();
    fixture = TestBed.createComponent(ConferenceDetail);
  });

  it('shows a prompt when no conference is selected', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Sélectionnez une conférence');
  });

  it('renders the conference passed by the parent', () => {
    fixture.componentRef.setInput('conference', {
      id: 99,
      title: 'Test Conference',
      description: 'Conference description',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 10,
      nbParticipants: 3,
    });
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Test Conference');
    expect(fixture.nativeElement.textContent).toContain('Conference description');
  });
});
