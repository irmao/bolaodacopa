import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';
import { Match } from './match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Bolão da Copa';

  showPreviousMatches: boolean;
  previousMatches: Match[];

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.showPreviousMatches = false;
  }

  showPreviousMatchesChange() {
    if (this.showPreviousMatches) {
      this.matchService.getPreviousMatches().subscribe(matches => this.previousMatches = matches);
    }
  }
}
