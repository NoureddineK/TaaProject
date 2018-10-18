import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger, animation } from '@angular/animations';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
  animations: [

    trigger('persons', [
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
export class AddPersonComponent implements OnInit {
  itemCount: number;
  btnText: string = 'Add';
  personName: string = '';
  cityName: string = '';
  persons = [];
  records = {};
  result = {};

  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.person.subscribe(res => this.persons = res);
    this.itemCount = this.persons.length;
    this._data.ChangePerson(this.persons);
  }
  sendMeHome() {
    this.router.navigate(['Home']);
  }
  addItem() {
    if (this.personName != '') {
      this.persons.push(this.personName);
      this.personName = '';
      this.itemCount = this.persons.length;
      this._data.ChangePerson(this.persons);
    }
  }
  removeItem(i) {
    this.persons.splice(i, 1);
    this.itemCount--;
    this._data.ChangePerson(this.persons);
  }
}
