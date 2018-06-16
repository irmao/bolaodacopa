import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  COUNTRIES : Country[] = [
    {code: 'arg', name: 'Argentina'},
    {code: 'bel', name: 'Bélgica'},
    {code: 'col', name: 'Colômbia'},
    {code: 'cro', name: 'Croácia'},
    {code: 'egy', name: 'Egito'},
    {code: 'esp', name: 'Espanha'},
    {code: 'ger', name: 'Alemanha'},
    {code: 'isl', name: 'Islândia'},
    {code: 'kor', name: 'Coréia'},
    {code: 'mar', name: 'Marrocos'},
    {code: 'nga', name: 'Nigéria'},
    {code: 'per', name: 'Peru'},
    {code: 'por', name: 'Portugal'},
    {code: 'sen', name: 'Senegal'},
    {code: 'sui', name: 'Suíça'},
    {code: 'tun', name: 'Tunísia'},
    {code: 'aus', name: 'Austrália'},
    {code: 'bra', name: 'Brasil'},
    {code: 'crc', name: 'Costa Rica'},
    {code: 'den', name: 'Dinamarca'},
    {code: 'eng', name: 'Inglaterra'},
    {code: 'fra', name: 'França'},
    {code: 'irn', name: 'Irã'},
    {code: 'jpn', name: 'Japão'},
    {code: 'ksa', name: 'Arábia Saudita'},
    {code: 'mex', name: 'México'},
    {code: 'pan', name: 'Panamá'},
    {code: 'pol', name: 'Polônia'},
    {code: 'rus', name: 'Rússia'},
    {code: 'srb', name: 'Sérvia'},
    {code: 'swe', name: 'Suécia'},
    {code: 'uru', name: 'Uruguai'},
  ];

  constructor() { }

  getByCode(code: string) {
    return _.find(this.COUNTRIES, {code: code});
  }
}
