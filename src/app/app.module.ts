import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

// Rutas
//import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { GeneralPistasComponent } from './pages/general-pistas/general-pistas.component';
import { PistasComponent } from './pages/pistas/pistas.component';

const pagesRoutes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'pistas', component: GeneralPistasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PistasComponent,
    GeneralPistasComponent
  ],
  exports: [
    BrowserModule,
    PagesComponent,
    PistasComponent,
    GeneralPistasComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    //APP_ROUTES,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(pagesRoutes)
  ],
  providers: [
      {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }