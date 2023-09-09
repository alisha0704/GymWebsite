import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about/:id', component: AboutComponent }, 
  { path: 'contact/:id', component: ContactComponent }, 
  { path: 'enquiry/:id', component: EnquiryComponent },
  { path: 'register/:id', component: RegisterComponent }
];
 
@NgModule({
  imports:[ BrowserModule,
  [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule { }
