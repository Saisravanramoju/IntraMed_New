import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { 
    emailjs.init('TXZYwKa1MlQ49QRb2');
  }
async sendEmail(name:string,email:string){
  const templateParams = {
    to: email, 
    to_name:name,
  }; 
 return await emailjs.send("service_rmrc9ca","template_veqt7ge",{
   templateParams
    }).then((response) => {
      console.log('Email sent successfully!', response);
      return response;
    })
    .catch((error) => {
      console.log('Email failed to send.', error);
      return error;
    });
}  
}
