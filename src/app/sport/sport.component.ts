import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }

  sports = [];
  ngOnInit() {
  }
  getSports() {
    this._data.getSports().subscribe(data => {
      this.sports = JSON.parse(JSON.stringify(data));
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('Completed');
    });

  }
  sendMeHome() {
    this.router.navigate(['Home']);
  }

}
