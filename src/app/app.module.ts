import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { PlaceComponent } from './place/place.component';
import { SportComponent } from './sport/sport.component';
import { LoginComponent } from './login/login.component';
import {ListboxModule} from 'primeng/listbox';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    SearchPersonComponent,
    HomeComponent,
    WeatherComponent,
    AddPersonComponent,
    PlaceComponent,
    SportComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ListboxModule,
    PasswordModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
