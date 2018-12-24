import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  user: any [] = [
      {email : document.getElementsByName('email')},
     {password : document.getElementsByName('password')}
  ];

  httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
  };

    config = {
        loginUrl: 'login',
        textFile:  'textFile'
    };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

    addUser(user: any[]) {
        return this.http.post(this.config.loginUrl, user, this.httpOptions);
    }

    login() {
        this.addUser(this.user)
            .subscribe(user => this.user.push(user));
    }
}
