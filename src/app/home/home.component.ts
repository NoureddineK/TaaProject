import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger, animation } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('home', [
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
export class HomeComponent implements OnInit {
  personName: string = '';
  personEmail: string = '';
  sports = [];
  places = [];
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._data.email.subscribe(res => this.personEmail = res);
    this._data.username.subscribe(res => this.personName = res);
    this.getplaces();
    this.getSports();
  }
  getSports() {
    if (this.personName !== '') {
      this._data.getSportsFromPerson(this.personName).subscribe(data => {
        this.sports = JSON.parse(JSON.stringify(data));
      }, err => {
        console.log(err.message);
      });
    }
  }

  getplaces() {
    this._data.getPlacesFromPerson(this.personName).subscribe(data => {
      this.places = JSON.parse(JSON.stringify(data));
    }, err => {
      console.log(err.message);
    });
  }

  deletePlace(name, i) {
    this.places.splice(i, 1);
    this._data.deletePlaceFromPerson(this.personName, name).subscribe(data => {
    }, err => {
      console.log(err.message);
    });

  }
  deleteSport(name, i) {
    this.sports.splice(i, 1);
    this._data.deleteSportFromPerson(this.personName, name).subscribe(data => {
    }, err => {
      console.log(err.message);
    });
  }
}
