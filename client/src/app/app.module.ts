import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestService } from '../services/rest.service';
import { AuthGuard } from '../guards/auth.guard';
import { WindowService } from '../services/window.service';
import * as firebase from 'firebase';
import { BetService } from '../services/bet.service';
import { MatDialog, MatDialogModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { BetComponent } from './components/bet/bet.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    BetComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
  ],
  providers: [
    RestService,
    AuthGuard,
    WindowService,
    BetService,
  ],
  entryComponents: [
    BetComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCHITD_UY7ADF5iYSPdLo6Q1vR8BxRh94g',
      authDomain: 'winnersure-3bd14.firebaseapp.com',
      databaseURL: 'https://winnersure-3bd14.firebaseio.com',
      projectId: 'winnersure-3bd14',
      storageBucket: 'winnersure-3bd14.appspot.com',
      messagingSenderId: '926910579847',
      appId: '1:926910579847:web:c853253f03f02333dae422',
    });
  }
}
