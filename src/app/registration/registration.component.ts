import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fs from 'fs-web';
import {RegistrationService} from './registranion.service';
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
@Injectable()
export class RegistrationComponent implements OnInit {
    private registrationService: RegistrationService;

    constructor(private http: HttpClient) { }

    person = {
       firstName : document.getElementsByName('fName'),
       lastName : document.getElementsByName('lName'),
       email : document.getElementsByName('email'),
       password : document.getElementsByName('password'),
       date: document.getElementsByName('date'),
    };

    register() {
        this.registrationService.addPerson(this.person)
            .subscribe(person => this.person.push(person));
    }


  ngOnInit() {

  }
}
