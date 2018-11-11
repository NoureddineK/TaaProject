import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week End Planner';
  userLogged: boolean = false;
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._data.logged.subscribe(res => this.userLogged = res);
    this._data.ChangeLogged(this.userLogged)
  }
  logOut() {
    this.userLogged = false;
    this._data.ChangeLogged(this.userLogged);
    this._data.ChangeMail('');
    this._data.ChangeName('');
    this.router.navigate(['']);
  }

}
