import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ContinentsComponent} from "./components/continents/continents.component";
import {DetailComponent} from "./components/detail/detail.component";
import {StartComponent} from "./components/start/start.component";

const App_Routing: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'pays', component: StartComponent},
  {path: 'continents', component: ContinentsComponent},
  {path: 'details', component: DetailComponent}
];

export const Routing = RouterModule.forRoot(App_Routing);
