import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient : HttpClient) {}

  registerForm(value: any,header:any) {
    return this.httpClient.post(`https://codingexercise.speakcore.com/api/registrations?key=${value.email}`, value,header);
  }
}
