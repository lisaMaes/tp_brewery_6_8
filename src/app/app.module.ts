import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { AleListComponent } from './ale-list/ale-list.component';
import { AleDetailComponent } from './ale-detail/ale-detail.component';
import {ROUTES} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AleListComponent,
    AleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
