import { Injectable } from '@angular/core';
import { Match } from './match';
import { CountryService } from './country.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private countryService: CountryService, private db: AngularFireDatabase) { 
    this.countryService = countryService;
  }

  getPreviousMatches(): Observable<Match[]> {
    return this.db.list<Match>('/matches/previous').valueChanges();
  }

  getNextMatch(): Observable<Match> {
    return this.db.object<Match>('/matches/next').valueChanges();
  }

  saveNextMatch(updatedMatch: Match): void {
    this.db.object<Match>('matches/next').set(updatedMatch);
  }

  addToPreviousMatches(match: Match): void {
    this.db.list<Match>('matches/previous').push(match);
  }

  removeNextMatch(): void {
    this.db.object<Match>(`matches/next`).remove();
  }
}
