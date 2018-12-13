import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewApplicationComponent } from './new-application/new-application.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'layout', pathMatch:'full'},
  { path: 'layout', component: LayoutComponent,
    children: [
      { path:'', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'new-app', component: NewApplicationComponent }
    ]
  }
  
];
export const LayoutRoutes: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);