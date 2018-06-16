import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match';

@Component({
  selector: 'app-previous-match',
  templateUrl: './previous-match.component.html',
  styleUrls: ['./previous-match.component.css']
})
export class PreviousMatchComponent implements OnInit {

  @Input() match: Match;

  constructor() { }

  ngOnInit() {
  }

}
