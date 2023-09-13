import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { FullPageLoaderComponent } from './full-page-loader/full-page-loader.component';
// import { PrimeNGConfig } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EnquiryComponent,
    RegisterComponent,
    FullPageLoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(private primengConfig: PrimeNGConfig) {}

  //   ngOnInit() {
  //       this.primengConfig.zIndex = {
  //           modal: 1100,    
  //           overlay: 1000, 
  //           menu: 1000,     
  //           tooltip: 1100   
  //       };
  //   }
}
