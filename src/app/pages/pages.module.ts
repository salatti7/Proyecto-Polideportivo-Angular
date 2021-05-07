import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from '../pages/pages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { PistasComponent } from './pistas/pistas.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
    declarations: [
        PagesComponent,
        PistasComponent,
        InicioComponent
    ],
    exports: [
        PagesComponent,
        PistasComponent,
        InicioComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class PagesModule { }