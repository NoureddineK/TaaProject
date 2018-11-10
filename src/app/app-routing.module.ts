import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { WeatherComponent } from './weather/weather.component';
import { PlaceComponent } from './place/place.component';
import { SportComponent } from './sport/sport.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Search/:id',
    component: SearchPersonComponent
  },
  {
    path: 'Add',
    component: AddPersonComponent
  },
  {
    path: 'Weather',
    component: WeatherComponent
  }
  ,
  {
    path: 'Place',
    component: PlaceComponent
  },
  {
    path: 'Sport',
    component: SportComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
