import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})

export class SearchPersonComponent implements OnInit {
  
  
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    // this._data.person.subscribe(res => this.persons = res);
  }

  sendMeHome() {
    this.router.navigate(['Home']);
  }

}
