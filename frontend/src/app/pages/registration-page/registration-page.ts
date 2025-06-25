import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, EmailValidator } from '@angular/forms';
import { RecaptchaModule } from "ng-recaptcha-2";
import { UserService } from '../../services/user-service';
import { User } from '../../models/User';
import { escapeRegExp } from '@angular/compiler';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('passwordAgain')?.value;
  return password === confirm ? null : { passwordsNotMatching: true };
}

@Component({
  selector: 'app-registration-page',
  imports: [ReactiveFormsModule, RecaptchaModule],
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.css'
})

export class RegistrationPage {
  formGroup = new FormGroup({
    name: new FormControl("", {
      validators: [Validators.required, Validators.maxLength(255)]
    }),
    username: new FormControl("", {
      validators: [Validators.required, Validators.maxLength(255)]
    }),
    email: new FormControl("", {
      validators: [Validators.required, Validators.email, Validators.maxLength(255)]
    }),
    tel: new FormControl("", {
      validators: [Validators.required, Validators.maxLength(20)]
    }),
    password: new FormControl("", {
      validators: [Validators.required, Validators.minLength(8)]
    }),
    passwordAgain: new FormControl("", {
      validators: [Validators.required]
    })
  }, { validators: passwordMatchValidator })
  
  isHuman: boolean = false
  
  constructor(private userService: UserService) {

  }


  resolved(captchaResponse: string | null) {
    if (captchaResponse) {
      this.isHuman = true;
    } else {
      this.isHuman = false;
    }
  }

  registerUser() {
    if (this.formGroup.valid) {

      let control = this.formGroup.controls
      let user: User = {
        name: control.name.value,
        username: control.username.value,
        email: control.email.value,
        phone_number: control.tel.value,
        password: control.password.value,
        password_confirmation: control.passwordAgain.value
      }
      this.userService.createUser(user).subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.error(err)
        }
      })
    }
  }
}
