import { DataInfoSerice } from './../providers/services/data-info.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule, MatCardModule, MatCheckboxModule, MatTableModule, MatSnackBarModule, MatStepperModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule} from '@angular/material';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewApplicationComponent }  from './new-application/new-application.component';
import { LayoutRoutes, routing } from './layout.routes';
import { ProfileComponent } from './new-application/pages/profile/profile.component';
import { HobbyComponent } from './new-application/pages/hobby/hobby.component';
import { PrivacyComponent } from './new-application/pages/privacy/privacy.component';
import { SettingsComponent } from './new-application/pages/settings/settings.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    NewApplicationComponent,
    ProfileComponent,
    HobbyComponent,
    PrivacyComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatStepperModule,
    MatSnackBarModule,
    routing
  ],
  providers: [
    LayoutRoutes,
    DataInfoSerice
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
