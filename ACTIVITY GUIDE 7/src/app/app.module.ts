import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecificationComponent } from './product-specification/product-specification.component';
import { StylesComponent } from './styles/styles.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InstructionsComponent,
    KeyFeaturesComponent,
    ProductOverviewComponent,
    ProductSpecificationComponent,
    StylesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
