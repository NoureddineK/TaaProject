import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityName: string = '';
  description: string = '';
  temp: number;
  humidity: number;
  time: string = '';
  weatherId: number;
  showWeather: boolean = false;
  showRes: boolean = false;
  sportsList = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
  }
  convertDate(timestamp) {
    var date = new Date(timestamp * 1000);
    var dateObject = date.getFullYear() + '/' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '/' + ('0' + date.getDate()).slice(-2) + " _ " +
      ('0' + date.getHours()).slice(-2) + ":" +
      ('0' + date.getMinutes()).slice(-2);
    return dateObject;
  }

  getWeather() {
    this.showRes = false;
    this.sportsList = [];
    this._data.getWeather(this.cityName).subscribe(data => {
      console.log(data);
      this.time = this.convertDate(data.time);
      this.temp = data.temperature;
      this.temp.toFixed(0);
      this.humidity = data.humidity;
      this.description = data.description;
      this.weatherId = data.id;
      this.showWeather = true;
    }, err => {
      console.log(err.message);
    });

  }
  getSports() { 
    if (this.cityName !== '') {
      this.showRes = true;
      this._data.getSportsWeatherID(this.weatherId, this.cityName).subscribe(data => {  
        this.sportsList = JSON.parse(JSON.stringify(data));  
      }, err => {
        console.log(err.message);
      });
    }
  }

}