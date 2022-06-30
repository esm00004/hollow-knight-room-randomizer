import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HomeInfoCardComponent } from './Home/Home-InfoCard.component';
import { HomeMapBoxComponent } from './Home/Home-MapBox.component';
import { HomeNavbarComponent } from './Home/Home-Navbar.component';
import { HomeSidebarComponent } from './Home/Home-Sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { TestPageComponent } from './Layouts/test-page/test-page.component';
import { HomeFrontPageComponent } from './Home/Home-FrontPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSidebarComponent,
    HomeNavbarComponent,
    HomeInfoCardComponent,
    TestPageComponent,
    HomeMapBoxComponent,
    HomeFrontPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
