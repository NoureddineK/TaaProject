import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { PlaceComponent } from './place/place.component';
import { SportComponent } from './sport/sport.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
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
  },
  {
    path: 'SignUp',
    component: SignupComponent
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
