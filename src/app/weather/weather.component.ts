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
  sportsList = [];
  sportsFinal = [];

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
    }, () => {
      console.log('Completed');
    });

  }
  getSports() {
    this._data.getSportsFromPlaces(this.cityName).subscribe(data => {
      this.sportsList = JSON.parse(JSON.stringify(data));
      for (var i = 0; i < this.sportsList.length; i++) {
        var wId = (this.weatherId / 100).toFixed(0);
        var sId = (this.sportsList[i].weatherID / 100).toFixed(0);
        if (wId == sId) {
          this.sportsFinal.push(this.sportsList[i]);
        }
      }
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('Completed');
    });
  }

}