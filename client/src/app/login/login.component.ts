import { Component, OnInit } from '@angular/core';
import {WindowService} from '../../services/window.service';
import * as firebase from 'firebase';
import * as firebaseui from '../../dist/npm__es_419';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private win: WindowService,
              private formBuilder: FormBuilder,
              private router: Router,
              private restService: RestService) {

  }

  ngOnInit() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            firebase.auth().currentUser.getIdToken(true).then((idToken) => {
              this.restService.create('login', {
                'token': idToken,
              }).subscribe(response => {
                if (response && response.success) {
                  sessionStorage.setItem('token', response.data.token);
                  sessionStorage.setItem('stoken', response.data.stoken);
                  this.restService.setToken(response.data);
                  this.router.navigateByUrl('/home');
                }
              });

            }).catch(function(error) {
              // Handle error
            });
            return false;
          },
        },
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: 'image',
            size: 'normal',
            badge: 'bottomleft',
          },
          defaultCountry: 'CO',
        },
      ],
      // Other config options...
    });
  }

  ngOnDestroy() {
  }


}
