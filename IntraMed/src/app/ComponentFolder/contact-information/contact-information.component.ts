import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';
import { RegisterResponseData } from '../RegisterData';
import { EmailService } from 'src/app/Services/EmailService/email.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {
  stateOption: any[] = [
    { Desc: "NJ", value: "NJ" },
    { Desc: "US", value: "US" },
    { Desc: "USA", value: "USA" }
  ];

  constructor(private route: Router, private fb: FormBuilder, private loginService: LoginServiceService,private emailService:EmailService) { }
  contactInformation?: FormGroup;
  ngOnInit(): void {
    this.contactInformation = this.fb.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      confirmMail: new FormControl("", [Validators.required, Validators.email]),
      subscribe: new FormControl(false)
    }, { validators: this.mustMatchData("email", "confirmMail") });
  }

  mustMatchData(controlName: any, matchingControlName: any) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors["confirmPasswordValidator"]
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  registrationData() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept' : 'application/json'
    }
    const email = this.contactInformation?.value.email;
    const name = this.contactInformation?.value.firstName;
    this.emailService.sendEmail(name,email).then(response => {
      console.log('Email sent successfully!',response);
    })
    .catch(error => {
      console.log('Email send failed:', error);
    });
    
    this.loginService.registerForm(this.contactInformation?.value,headers)
  .pipe(
    map((data: any) => data as RegisterResponseData) 
  )
  .subscribe((data: RegisterResponseData) => { 
    if (data && data.id !== undefined && data.id !== "") { 
      localStorage.setItem('UserToken', data.id);
      this.route.navigateByUrl("complete");
    }
  });
  //this.route.navigateByUrl("complete");
}
}
