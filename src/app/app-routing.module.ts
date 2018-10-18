import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {
    path: '',
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
