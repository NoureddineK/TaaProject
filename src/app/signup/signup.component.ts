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
  email: string ='';
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  signUp(){

  }

}
