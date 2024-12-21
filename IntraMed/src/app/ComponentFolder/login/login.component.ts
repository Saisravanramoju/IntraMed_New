import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[a-z].*[A-Z])/)])
  });
  constructor(private route: Router) { }

  logInForm() {
    if (this.loginForm.valid) {
      this.route.navigateByUrl("contact-information");
    }
  }

  // registerForm() {
  //   this.route.navigateByUrl("contact-information");
  // }
}
