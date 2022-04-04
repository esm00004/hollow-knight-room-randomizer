import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeInfoCardComponent } from './Home/Home-InfoCard.component';
import { HomeMapBoxComponent } from './Home/Home-MapBox.component';
import { HomeNavbarComponent } from './Home/Home-Navbar.component';
import { HomeSidebarComponent } from './Home/Home-Sidebar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeSidebarComponent,
    HomeNavbarComponent,
    HomeMapBoxComponent,
    HomeInfoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
