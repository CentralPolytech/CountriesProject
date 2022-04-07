import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../model/country';
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  @Input() countries: Country[] = [];
  @Input() keyWord: string = '';
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.getCountries();
  }
}
