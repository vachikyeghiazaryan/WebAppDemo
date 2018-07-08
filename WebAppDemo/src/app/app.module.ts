import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ProductItemComponent } from './components/store/product.item.component';

import { routing } from './app.router';

import { HomeService } from "./core/services/home.service";
import { IStoreService, StoreService } from './core/services/store.service';
import { ServiceModule } from './service.module';

@NgModule({
    imports: [
        BrowserModule,
		FormsModule,
		HttpClientModule,
		HttpModule,
		routing,
		ServiceModule
    ],
    declarations: [
		HomeComponent,
		StoreComponent,
		ProductItemComponent,
        AppComponent
	],
	providers: [HomeService],
    bootstrap: [AppComponent]
 })
export class AppModule { }
