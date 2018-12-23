import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
@Injectable()
export class RegistrationComponent implements OnInit {
    config = {
        registrationUrl: 'registrationUrl',
        textFile:  'textFile'
    };

    constructor(private http: HttpClient) { }

    person: any[] = [
        {firstName : document.getElementsByName('fName')},
        {lastName : document.getElementsByName('lName')},
        {email : document.getElementsByName('email')},
        {password : document.getElementsByName('password')},
        {date: document.getElementsByName('date')}
    ];

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    addPerson(person: any[]) {
        return this.http.post(this.config.registrationUrl, person, this.httpOptions);
    }

    register() {
        this.addPerson(this.person)
            .subscribe(person => this.person.push(person));
    }


  ngOnInit() {

  }
}
