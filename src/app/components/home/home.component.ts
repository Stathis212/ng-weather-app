import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City, Country } from '@shared/models';

import { HomeFacade } from './home.facade';

@Component({
  selector: 'wa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeFacade]
})
export class HomeComponent implements OnInit {

  selectedCountry = null;
  selectedCity = null;
  countries: Country[] = [];
  allCities: City[] = [];
  citiesPerCountry = [];

  constructor(private route: ActivatedRoute,
              private facade: HomeFacade
              ) {}

  ngOnInit(): void {
    this.countries = this.route.snapshot.data.countries.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.allCities = this.route.snapshot.data.cities;
  }

  public countryChanged() {
    this.resetSelectedCity();
    this.setSelectedCountry();
    this.citiesPerCountry = this.allCities
                              .filter(city => city.country === this.selectedCountry.alphaCode)
                              .sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  public cityChanged() {
    this.setSelectedCity();
  }

  private setSelectedCountry(): void {
    this.facade.setSelectedCountry(this.selectedCountry);
  }

  private setSelectedCity(): void {
    this.facade.setSelectedCity(this.selectedCity);
  }

  private resetSelectedCity() {
    this.selectedCity = null;
  }
}
