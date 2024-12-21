import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ComponentFolder/login/login.component';
import { ContactInformationComponent } from './ComponentFolder/contact-information/contact-information.component';
import { CompleteComponent } from './ComponentFolder/complete/complete.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path: 'contact-information', component: ContactInformationComponent },
  { path: 'complete', component: CompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
