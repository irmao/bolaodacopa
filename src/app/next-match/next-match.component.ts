import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatchService } from '../match.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Match } from '../match';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-next-match',
  templateUrl: './next-match.component.html',
  styleUrls: ['./next-match.component.css']
})
export class NextMatchComponent implements OnInit {

  countries: Country[];
  nextMatchToCreate: Match;
  nextMatch: Match;
  users: User[];

  constructor(private matchService: MatchService, private userService: UserService,
    private countryService: CountryService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;

      this.matchService.getNextMatch().subscribe(match => {
        this.nextMatch = match;

        if (this.nextMatch) {
          if (!this.nextMatch.guesses1 || this.nextMatch.guesses1.length === 0) {
            this.nextMatch.guesses1 = [];
            this.nextMatch.guesses2 = [];
            this.users.forEach(u => {
              this.nextMatch.guesses1[u.id] = null;
              this.nextMatch.guesses2[u.id] = null;
            });
          }
        }
      });
    });

    this.countries = this.countryService.COUNTRIES;
    this.nextMatchToCreate = new Match();
  }

  saveNextMatch() {
    this.matchService.saveNextMatch(this.nextMatch);
  }

  endMatch() {
    // checks whether someone guessed right
    let winnerUsers: string[] = [];

    this.users.forEach(u => {
      if (this.nextMatch.score1 === this.nextMatch.guesses1[u.id]
        && this.nextMatch.score2 === this.nextMatch.guesses2[u.id]) {
        this.userService.setScore(u.id, this.users[u.id].score + 1);
        winnerUsers.push(u.name);
      }
    });

    if (winnerUsers.length > 0) {
      this.nextMatch.winGuesser = winnerUsers.join(', ');
    }

    this.matchService.addToPreviousMatches(this.nextMatch);
    this.matchService.removeNextMatch();
    this.nextMatchToCreate = new Match();
  }

  createMatch() {
    this.matchService.saveNextMatch(this.nextMatchToCreate);
    this.nextMatchToCreate = new Match();
  }

  guessNextMatchTime() {
    const date = new Date();

    if (date.getHours() < 11) {
      date.setHours(11);
    } else if (date.getHours() < 15) {
      date.setHours(15);
    } else {
      date.setDate(date.getDate() + 1);
      date.setHours(11);
    }

    date.setMinutes(0);
    date.setSeconds(0);

    return this.datePipe.transform(date, 'dd/LL HH:mm');
  }

  transferNextGuessedTime() {
    this.nextMatchToCreate.time = this.guessNextMatchTime();
  }
}
