import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})

export class LoginPage {
  formGroup = new FormGroup({
    email: new FormControl("", {
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    password: new FormControl("", {
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    })
  })

  get email() {
    return this.formGroup.get('email');
  }
  get password() {
    return this.formGroup.get('password');
  }

  submitLoginForm(event: Event) {
    event.preventDefault();

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      console.log("sad")
    }

  }
}


