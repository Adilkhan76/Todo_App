// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { Person } from '../person.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private persons: Person[] = [];

  addPerson(person: Person) {
    this.persons.push(person);
  }

  getAllPersons() {
    return this.persons;
  }
}
