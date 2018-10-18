import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

@Injectable()
export class DataService {
  private persons = new BehaviorSubject<any>(['Noureddine', 'Kadri']);
  person = this.persons.asObservable();

  constructor(private http: HttpClient) { }

  ChangePerson(person) {
    this.persons.next(person);
  }
  getData(city) {
    var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',fr&appid=bd4f34566c53fd4ec9b07bf3e4995e1c';
    return this.http.get<myData>(weatherApi);
  }
}
