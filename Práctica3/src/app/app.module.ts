import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { LayoutModule } from '../app/modules/layout/layout.module';
import {ExchageRateModule} from './modules/exchage-rate/exchage-rate.module';
import { CustomerModule } from './modules/customer/customer.module'; 
import { HomeModule } from './modules/home/home.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule, 
    ExchageRateModule,
    HomeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
