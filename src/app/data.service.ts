import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Headers': 'Content-Type,Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  })
};
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
  private usernames = new BehaviorSubject<string>('');
  private emails = new BehaviorSubject<string>('');
  private loggedReq = new BehaviorSubject<boolean>(false);
  username = this.usernames.asObservable();
  email = this.emails.asObservable();
  logged = this.loggedReq.asObservable();

  server = "/api/";

  constructor(private http: HttpClient) { }

  ChangeName(name) {
    this.usernames.next(name);
  }
  ChangeMail(mail) {
    this.emails.next(mail);
  }
  ChangeLogged(logg) {
    this.loggedReq.next(logg);
  }

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

  addUser(name, mail, mdp) {
    return this.http.post(this.server + "/person/addPerson/" + name + "/" + mail + "/" + mdp, httpOptions);
  }
  getSportsFromPerson(name) {
    return this.http.get<listSports>(this.server + "person/getSportsFromPerson/" + name);
  }

  getPlacesFromPerson(name) {
    return this.http.get<place>(this.server + "person/getPlacesFromPerson/" + name);
  }

  deletePlaceFromPerson(nameP, nameC) {
    return this.http.get(this.server + "person/deletePlaceFromPerson/" + nameP + "/" + nameC);
  }

  deleteSportFromPerson(nameP, nameS) {
    return this.http.get(this.server + "person/deleteSportFromPerson/" + nameP + "/" + nameS);
  }
  addPlaceToPerson(nameP, nameC) {
    return this.http.post(this.server + "person/addPlaceToPerson/" + nameP + "/" + nameC, httpOptions);

  }
  addSportToPerson(nameP, nameS) {
    return this.http.post(this.server + "person/addSportToPerson/" + nameP + "/" + nameS, httpOptions);
  }
  getSportsWeatherID(wID, nameC) {
    return this.http.get<listSports>(this.server + "weather/getSportsWeatherForPlace/" + wID + "/" + nameC);
  }

  sendMeMail(mail, body) {
    return this.http.post(this.server + "/sendMail" + mail + "/" + body, httpOptions);
  }

}

