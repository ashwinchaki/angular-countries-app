import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input"
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { DefaultComponent } from './views/default/default.component';
import { DetailsComponent } from './views/details/details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { RegionFilterComponent } from './components/region-filter/region-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DetailsComponent,
    NavbarComponent,
    CardDisplayComponent,
    RegionFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
