import { Component, OnInit,Input } from '@angular/core';
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
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this._data.getPersonByName(this.personName).subscribe(data => {
      if ((this.personName !== data.name) || (this.personPword !== data.password)) {
        console.error("password incorrect");
        this.router.navigate(['SignUp']);
      }
      else{
        this.router.navigate(['Home']);
      }
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('Completed');
    });
  }
}
