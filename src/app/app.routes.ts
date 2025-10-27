import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Import all components
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { CareerComponent } from './components/career/career.component';
import { PartnerComponent } from './components/partner/partner.component';
import { BpoComponent } from './components/bpo/bpo.component';
import { InboundComponent } from './components/inbound/inbound.component';
import { OutboundComponent } from './components/outbound/outbound.component';
import { SoftwareComponent } from './components/software/software.component';
import { UiComponent } from './components/ui/ui.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { AndroidComponent } from './components/android/android.component';
import { IosComponent } from './components/ios/ios.component';
import { CrossComponent } from './components/cross/cross.component';
import { CampusComponent } from './components/campus/campus.component';
import { CapitalComponent } from './components/capital/capital.component';
import { CounterComponent } from './components/counter/counter.component';
import { MarketComponent } from './components/market/market.component';
import { PathComponent } from './components/path/path.component';
import { ItmsComponent } from './components/itms/itms.component';
import { VidyaComponent } from './components/vidya/vidya.component';
import { TapComponent } from './components/tap/tap.component';
import { AdminComponent } from './components/admin/admin.component';
import { EdtechComponent } from './components/edtech/edtech.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { FinetechComponent } from './components/finetech/finetech.component';
import { ManufacturingComponent } from './components/manufacturing/manufacturing.component';
import { AimlComponent } from './components/aiml/aiml.component';
import { ContactComponent } from './components/contact/contact.component';
import { PublicsectorComponent } from './components/publicsector/publicsector.component';
import { GenaiComponent } from './components/genai/genai.component';
import { IotComponent } from './components/iot/iot.component';
import { CybersecurityComponent } from './components/cybersecurity/cybersecurity.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
  { path: 'career', component: CareerComponent },
  { path: 'clients', component: PartnerComponent },
  { path: 'genai', component: GenaiComponent },
  { path: 'content-moderation', component: ContentComponent },
  { path: 'iot', component: IotComponent },
  { path: 'bpo', component: BpoComponent },
  { path: 'inbound', component: InboundComponent },
  { path: 'outbound', component: OutboundComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'ui', component: UiComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'cross-platform-app-development', component: CrossComponent },
  { path: 'android-application-development', component: AndroidComponent },
  { path: 'ios-application-development-company', component: IosComponent },
  { path: 'campus-radar', component: CampusComponent },
  { path: 'capital-radar', component: CapitalComponent },
  { path: 'care-radar', component: CounterComponent },
  { path: 'market-radar', component: MarketComponent },
  { path: 'the-path', component: PathComponent },
  { path: 'itms', component: ItmsComponent },
  { path: 'vidya-app', component: VidyaComponent },
  { path: 'tap-spring', component: TapComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'edtech', component: EdtechComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'fintech', component: FinetechComponent },
  { path: 'auto-manufacturing', component: ManufacturingComponent },
  { path: 'ai-ml', component: AimlComponent },
  { path: 'public-sector-government', component: PublicsectorComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cybersecurity', component: CybersecurityComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // fallback
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // auto scroll top
      scrollOffset: [0, 0],
      useHash: true, // required for GitHub Pages (avoids 404)
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload' // ensures page refresh behavior
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
