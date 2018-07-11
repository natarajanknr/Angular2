import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
 { path: '', redirectTo:'about', pathMatch: 'full' },
 { path: 'about', component:AboutComponent },
 { path: 'service', component:ServiceComponent },
 { path: 'contact', component:ContactComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);