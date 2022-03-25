import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './Home/Home-Navbar.component';
import { HomeSidebarComponent } from './Home/Home-Sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSidebarComponent,
    HomeNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
