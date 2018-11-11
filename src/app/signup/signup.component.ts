import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  username: string = '';
  password: string = '';
  email: string = '';
  logged: boolean = false;
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._data.email.subscribe(res => this.email = res);
    this._data.username.subscribe(res => this.username = res);
    this._data.logged.subscribe(res => this.logged = res);
    this._data.ChangeMail(this.email);
    this._data.ChangeName(this.username);
    this._data.ChangeLogged(this.logged);
  }

  signUp() {
    if ((this.username !== '') || (this.password !== '') || (this.email !== '')) {
      this._data.addUser(this.username, this.email, this.password).subscribe(data => {
        this._data.ChangeMail(this.email);
        this._data.ChangeName(this.username);
        this.logged = true;
        this.router.navigate(['Home']);
      }, err => {
        console.log(err.message);
      });
    }else {
      this.logged = false;
    }
    this._data.ChangeLogged(this.logged);
  }
}
