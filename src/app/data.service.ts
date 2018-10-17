import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private persons = new BehaviorSubject<any>(['Pers1', 'Pers2']);
  person = this.persons.asObservable();

  constructor() { }

  ChangePerson(person) {
    this.persons.next(person);
  }


}
