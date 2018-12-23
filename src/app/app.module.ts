import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MyMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponentComponent,
    ProfileComponent,
    NavigationbarComponent,
    ProfileeditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponentComponent },
      {path: 'profile', component: ProfileComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
