import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Password } from 'primeng/password';

interface myData {
  temp: number,
  main: string,
  coord: Object,
  weather: Object,
  wind: Object,
  clouds: Object,
  dt: number,
  sys: Object,
  name: string,
}
interface dataWeather {
  id: number,
  temperature: number,
  time: number,
  humidity: number,
  description: string,
}
interface place {
  posteCode: number,
  name: string,
}
interface sport {
  name: string,
  weatherID: number
}
interface person {
  name: string,
  password: string,
  mail: string
}
interface listSports {
  sports: sport[]
}



@Injectable()
export class DataService {
  // private persons = new BehaviorSubject<any>(['Noureddine', 'Kadri']);
  //person = this.persons.asObservable();
  server = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  //ChangePerson(person) {
  //this.persons.next(person);
  //}

  getWeather(cityName) {
    return this.http.get<dataWeather>(this.server + "weather/name/" + cityName);
  }

  getPlaces() {
    return this.http.get<place>(this.server + "place/allObjects");
  }
  getSports() {
    return this.http.get<sport>(this.server + "sport/allObjects");
  }
  getPersonByName(name) {
    return this.http.get<person>(this.server + "person/findByName/" + name);
  }
  getSportsFromPlaces(placeName) {
    return this.http.get<listSports>(this.server + "place/getSportsFromPlace/" + placeName);
  }



}
