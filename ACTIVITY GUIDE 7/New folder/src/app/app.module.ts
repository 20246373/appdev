import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { LeaderDetailComponent } from './leader-detail/leader-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LeaderDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
