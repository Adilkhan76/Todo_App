// src/app/form.component.ts
import { Component } from '@angular/core';
import { Person } from '../person.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  person: Person = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: ''
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.addPerson(this.person);
    this.person = {
      firstname: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      address: '',
      password: ''
    };
  }
}
