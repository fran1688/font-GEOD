import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import Swal from 'sweetalert2';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['123456', Validators.required]
  });

  constructor( private  router: Router,
               private fb: FormBuilder,
               private userService: UserService) { }

  ngOnInit(): void {
    this.renderButton();
  }

  // tslint:disable-next-line:typedef
  login() {
    this.userService.login( this.loginForm.value )
      .subscribe( resp => {

        if ( this.loginForm.get('remember').value ) {
          localStorage.setItem('email', this.loginForm.get('email').value);
        } else {
          localStorage.removeItem('email');
        }

        // Navegar as Dashboard
        this.router.navigateByUrl('/');

      }, (err) => {
        // si sucede un error
        Swal.fire('Error', err.error.msg, 'error');
      });
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark'
    });

    this.startApp();
  }

  startApp() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '824358536839-787vejr86c9t93ppupvjtjebh3v9hclq.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler( element, {},
      // tslint:disable-next-line:only-arrow-functions
      (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;
        this.userService.loginGoogle( id_token )
          .subscribe( resp => {
            // Navegar as Dashboard
            this.router.navigateByUrl('/');
          });

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

}
