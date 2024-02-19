import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NextDirective } from './dashboard/next.directive';
import { PrevDirective } from './dashboard/prev.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PlantSpecimensComponent } from './plant-specimens/plant-specimens.component';
import { HumanBiospecimensComponent } from './human-biospecimens/human-biospecimens.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlantPopupComponent } from './plant-specimens/plant-popup/plant-popup.component';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    NextDirective,
    PrevDirective,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    PlantSpecimensComponent,
    HumanBiospecimensComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicePageComponent,
    PlantPopupComponent,
    ScrollToTopComponent,
    WhatsappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
