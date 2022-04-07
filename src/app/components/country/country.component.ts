import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../model/country';
import {Router} from "@angular/router";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country | null = null;

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {

  }
  gotodetails() {
    const link = ['details'];
    this.router.navigate(link);
  }
}

