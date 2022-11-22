import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RequestComponent } from './pages/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: '', component: LandingComponent },
      { path: 'request', component: RequestComponent },
      { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
