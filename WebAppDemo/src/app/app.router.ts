import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { StoreComponent } from './components/store/store.component';
import { AuthGuardService as AuthGuard } from './core/services/auth/auth-guard.service';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent, },
	{ path: '', component: HomeComponent },
	{
		path: 'store',
		children: [
			{
				path: '',
				component: StoreComponent
			}
		],
		canActivate: [AuthGuard]
	},

	// otherwise redirect to home
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
