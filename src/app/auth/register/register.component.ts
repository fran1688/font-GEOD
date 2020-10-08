import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3) ]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terms: [ false, Validators.required]
  }, {
    validators: this.passwordEqual('password', 'password2')
  });

  constructor( private fb: FormBuilder,
               private userService: UserService,
               private router: Router) { }
  // tslint:disable-next-line:typedef
  createUser(){
    this.formSubmitted = true;
    console.log( this.registerForm.value);

    if ( this.registerForm.invalid){
      return;
    }

    // Register de User
    this.userService.createUser( this.registerForm.value)
    .subscribe( resp => {
      // Navegar as Dashboard
      this.router.navigateByUrl('/');
    }, (err) => {
      // si sucede un error
      Swal.fire('Error', err.error.msg, 'error');
    });
  }
  // tslint:disable-next-line:typedef
  fieldNotValid( campo: string): boolean {
   if (this.registerForm.get(campo).invalid && this.formSubmitted) {
     return true;
   } else {
     return false;
   }
  }

  // tslint:disable-next-line:typedef
  passwordNoValid() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }

  }

  // tslint:disable-next-line:typedef
  AcceptTerms() {
    return !this.registerForm.get('terms').value && this.formSubmitted;
  }

  // tslint:disable-next-line:typedef
  passwordEqual(pass1Name: string, pass2Name: string) {

  return ( formGroup: FormGroup ) => {

    const pass1Control = formGroup.get(pass1Name);
    const pass2Control = formGroup.get(pass2Name);

    if ( pass1Control.value === pass2Control.value ) {
      pass2Control.setErrors(null);
    } else {
      pass2Control.setErrors({noEsIgual: true});
    }
  };
  }

}
