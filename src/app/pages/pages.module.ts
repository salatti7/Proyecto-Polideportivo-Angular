import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

//import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
    declarations: [
        InicioComponent,
    ],
    exports: [
        InicioComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
    ]
})

export class PagesModule { }