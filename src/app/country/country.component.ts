import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() code: string;
  country: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.country = this.countryService.getByCode(this.code);
  }

}
