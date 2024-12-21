import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ComponentFolder/header/header.component'
import { FooterComponent } from './ComponentFolder/footer/footer.component';
import { LoginComponent } from './ComponentFolder/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ContactInformationComponent } from './ComponentFolder/contact-information/contact-information.component';
import { CompleteComponent } from './ComponentFolder/complete/complete.component';
import { LoginServiceService } from './Services/LoginService/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactInformationComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
