import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
fName = 'Даниил';
lName = 'Калиновский';
age = '20';
email = 'daniilkalinovskiy@gmail.com';
sotialNetworks = 'https://vk.com/daniilkalinovskyi';
hobbies = 'reading';
city = 'Одесса';
region = 'Одесская обл.';
country = 'Украина';
avatarSRC = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/12/11/20/pg-24-avatar-1-capital.jpg?w968h681';
  constructor() { }

  ngOnInit() {
  }

}
