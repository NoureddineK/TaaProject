import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-person',
  templateUrl: './select-person.component.html',
  styleUrls: ['./select-person.component.css']
})
export class SelectPersonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  sendMeSearch(){
    this.router.navigate(['Search/5']);
  }

}
