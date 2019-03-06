import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailFormControl = new FormControl('', {validators: [Validators.required, Validators.email]});
  passwordFormControl = new FormControl('', {validators: [Validators.required]});

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }

}
