import { Component, OnInit } from '@angular/core';
import {register} from 'ts-node';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
    private fs = require('fs');

    constructor() { }

   private person = {
       nickname : document.getElementsByName('name'),
       email : document.getElementsByName('email'),
       password : document.getElementsByName('password'),
       date: document.getElementsByName('date'),
    };
    register() {

        this.fs.writeFile('person.json', JSON.stringify(this.person),  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log('File created!');
        });
    }


  ngOnInit() {

  }
}
