import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
nickname = 'Даниил';
age = '20';
email = 'daniilkalinovskiy@gmail.com';
hobbies = 'reading';
avatarSRC = 'https://zabavnik.club/wp-content/uploads/Kartinki_hd_na_telefon_3_08200519.jpg';
userUrl = 'http://localhost:8181/user/registration?';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

}
