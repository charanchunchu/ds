import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PlantSpecimensComponent } from './plant-specimens/plant-specimens.component';
import { HumanBiospecimensComponent } from './human-biospecimens/human-biospecimens.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'privacy-policy',component:PrivacyPolicyComponent },
  { path: 'services', component:ServicePageComponent },
  { path: 'terms-condition',component:TermsConditionComponent },
  { path: 'plant-specimens', component: PlantSpecimensComponent },
  { path: 'human-biospecimens',component:HumanBiospecimensComponent },
  { path: 'about-us',component:AboutUsComponent },
  { path: 'contact-us',component:ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
