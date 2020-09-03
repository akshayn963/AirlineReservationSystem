import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BookingComponent } from './booking/booking.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ContactusComponent } from './contactus/contactus.component';
//import { ForgotpassComponent } from './forgotpass/forgotpass.component';


const routes: Routes = [
  { path: '', component: LoginComponent },// home page
  { path: 'login', component: LoginComponent },// home page
  { path: 'register', component: RegistrationComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '**', component: ErrorpageComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
