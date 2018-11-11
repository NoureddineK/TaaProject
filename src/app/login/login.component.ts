import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  personName: string = '';
  personPword: string = '';
  personEmail: string = '';
  logged: boolean = false;

  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this._data.email.subscribe(res => this.personEmail = res);
    this._data.username.subscribe(res => this.personName = res);
    this._data.logged.subscribe(res => this.logged = res);
    this._data.ChangeMail(this.personEmail);
    this._data.ChangeName(this.personName);
    this._data.ChangeLogged(this.logged);
  }

  login() {
    if (this.personName !== '' || this.personPword !== '') {
      this._data.getPersonByName(this.personName).subscribe(data => {
        if ((this.personName !== data.name) || (this.personPword !== data.password)) {
          console.error("password incorrect");
          this.logged = false;
          this.router.navigate(['SignUp']);
        }
        else {
          this.personName = data.name;
          this.personEmail = data.mail;
          this.logged = true;
          this._data.ChangeMail(this.personEmail);
          this._data.ChangeName(this.personName);   
          this.router.navigate(['Home']);
        }
        this._data.ChangeLogged(this.logged);
      }, err => {
        console.log(err.message);
      });
    }
  }
}
