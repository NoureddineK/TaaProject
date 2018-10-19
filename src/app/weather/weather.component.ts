import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  btnText: string = 'Get Weather';
  cityName: string = '';
  cityId: number;
  description: string = '';
  temp: number;
  humidity: number;
  time: string = '';
  name: string;
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
  searchWeather() {
    if (this.cityName != '') {
      this._data.getData(this.cityName).subscribe(data => {
        this.time = this.convertDate(data.dt);
        this.name = data.name;
        var _main = JSON.parse(JSON.stringify(data.main));
        this.temp = _main.temp - 273.15;
        this.temp.toFixed(0);
        this.humidity = _main.humidity;
        var _weather = JSON.parse(JSON.stringify(data.weather));
        this.description = _weather[0].description;
      }, err => {
        console.log(err.message);
      }, () => {
        console.log('Succes');
        console.log("city : " + this.name +
          " Temperature: " + this.temp +
          " Time: " + this.time +
          " Humidity: " + this.humidity +
          " Description: " + this.description);
      });
    }
    this.cityName = '';
  }

  getWeather() {
      this._data.getWeather(this.cityId).subscribe(data => {
        console.log(data);
        this.time = this.convertDate(data.time);
        this.temp = data.temperature;
        this.temp.toFixed(0);
        this.humidity = data.humidity;
        this.description = data.description;
      }, err => {
        console.log(err.message);
      }, () => {
        console.log('Completed');
        console.log('Succes');
        console.log( " Temperature: " + this.temp +
          " Time: " + this.time +
          " Humidity: " + this.humidity +
          " Description: " + this.description);
      });

    }

}