import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ProductItemComponent } from './components/store/product-item/product.item.component';

import { routing } from './app.router';

import { HomeService } from "./core/services/home.service";
import { IStoreService, StoreService } from './core/services/store.service';
import { ServiceModule } from './service.module';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user.service';
import { PermissionsDirective } from './core/directives/permissions.directive';
import { NavComponent } from './components/nav/nav.component';
import { CategoryComponent } from './components/store/category/category.component';
import { SidebarComponent } from './components/store/sidebar/sidebar.component';

@NgModule({
    imports: [
        BrowserModule,
		FormsModule,
		HttpClientModule,
		HttpModule,
		routing,
		ServiceModule,
		//JwtModule.forRoot({
		//	config: {
		//		tokenGetter: () => {
		//			return localStorage.getItem("access_token")
		//		},
		//		whitelistedDomains: ["localhost:63995"]
		//	},
		//})
    ],
    declarations: [
		HomeComponent,
		StoreComponent,
		ProductItemComponent,
		CategoryComponent,
		NavComponent,
		SidebarComponent,
		AppComponent,
		PermissionsDirective,
	],
	providers: [
		HomeService,
		AuthService,
		AuthGuardService,
		UserService,
	],
    bootstrap: [AppComponent]
 })
export class AppModule { }
