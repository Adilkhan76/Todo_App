// src/app/home.component.ts
import { Component } from '@angular/core';
import { Person } from '../person.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  persons: Person[] = [];

  constructor(private userService: UserService) {
    this.persons = this.userService.getAllPersons();
  }
}
