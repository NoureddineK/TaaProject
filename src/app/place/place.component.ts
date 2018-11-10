import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  selectedCity:any;
  places = [];
  sports = [];

  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) {
    this.getCities();
  }

  ngOnInit() {
  }

  getCities() {
    this._data.getPlaces().subscribe(data => {
      this.places = JSON.parse(JSON.stringify(data));
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('Completed');
    });

  }
  getSports() {
    if (this.selectedCity !=='' ) {
        this._data.getSportsFromPlaces(this.selectedCity.name).subscribe(data => {
          this.sports = JSON.parse(JSON.stringify(data));
          console.log("Sports: "+this.sports);
        }, err => {
          console.log(err.message);
        }, () => {
          console.log('Completed');
        });
    }
  }


}
