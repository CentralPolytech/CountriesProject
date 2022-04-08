import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountryComponent } from './components/country/country.component';
import { SearchComponent } from './components/Search/Search.component';
import { AffichageComponent } from './components/Affichage/Affichage.component';
import { DetailComponent} from "./components/detail/detail.component";
import {Routing} from "./app.routing";
import { StartComponent} from "./components/start/start.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CountriesComponent,
    ContinentsComponent,
    CountryComponent,
    SearchComponent,
    AffichageComponent,
    DetailComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
