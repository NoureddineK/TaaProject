import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { trigger, style, transition, animate, keyframes, query, stagger, animation } from '@angular/animations';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  animations: [
    trigger('place', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transition: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transition: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transition: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transition: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transition: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transition: 'translateY(-75%)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ])
  ]

})
export class PlaceComponent implements OnInit {
  personName: string = '';
  places = [];
  sports = [];
  placeList = [];
  label : boolean = false;

  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) {
    this.getCities();
  }

  ngOnInit() {
    this._data.username.subscribe(res => this.personName = res);
  }

  getCities() {
    this._data.getPlaces().subscribe(data => {
      this.places = JSON.parse(JSON.stringify(data));
    }, err => {
      console.log(err.message);
    });

  }
  getSports(name) {
    this._data.getSportsFromPlaces(name).subscribe(data => {
      this.sports = JSON.parse(JSON.stringify(data));
      console.log("Sports: " + this.sports);
    }, err => {
      console.log(err.message);
    });
  }

  addPlaces() {
    this.label = true;
    this._data.getPlaces().subscribe(data => {
      this.placeList = JSON.parse(JSON.stringify(data));
    }, err => {
      console.log(err.message);
    });
  }

  AddFavorite(name,i) {
    if (this.personName !== '') {
      this.placeList.splice(i, 1);
      this._data.addPlaceToPerson(this.personName, name).subscribe(data => {
      }, err => {
        console.log(err.message);
      });
    }
  }

}
