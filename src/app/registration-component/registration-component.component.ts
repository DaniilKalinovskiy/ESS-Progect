import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fs from 'fs-web';
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
@Injectable()
export class RegistrationComponentComponent implements OnInit {

    constructor(private http: HttpClient) { }

   private person = {
       firstName : document.getElementsByName('fName'),
       lastName : document.getElementsByName('lName'),
       email : document.getElementsByName('email'),
       password : document.getElementsByName('password'),
       date: document.getElementsByName('date'),
    };
    register() {
        fs.writeFile('person.json', JSON.stringify(this.person),  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log('File created!');
        });
    }



  ngOnInit() {

  }
}
