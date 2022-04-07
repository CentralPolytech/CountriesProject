import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { COUNTRIES } from 'src/data/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countries: Country[] = []

  constructor() { }

  ngOnInit(): void {

  }
  getCountries(){
    this.countries= COUNTRIES;
    return this.countries;
  }

}
