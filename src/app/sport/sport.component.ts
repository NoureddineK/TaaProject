import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger, animation } from '@angular/animations';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css'],
  animations: [
    trigger('sport', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('200ms', [
          animate('.3s ease-in', keyframes([
            style({ opacity: 0, transition: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transition: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transition: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('.3s ease-in', keyframes([
            style({ opacity: 1, transition: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transition: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transition: 'translateY(-75%)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ])
  ]

})
export class SportComponent implements OnInit {

  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }
  personName: string = '';
  sports = [];
  label : boolean = false;
  ngOnInit() {
    this._data.username.subscribe(res => this.personName = res);
  }
  getSports() {
    this.label = true;
    this._data.getSports().subscribe(data => {
      this.sports = JSON.parse(JSON.stringify(data));
    }, err => {
      console.log(err.message);
    });

  }

  AddFavorite(name,i) {
    if (this.personName !== '') {
      this.sports.splice(i, 1);
      this._data.addSportToPerson(this.personName, name).subscribe(data => {
      }, err => {
        console.log(err.message);
      });
    }
  }
}
