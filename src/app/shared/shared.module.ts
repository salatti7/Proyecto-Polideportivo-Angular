import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
    declarations: [
        HeaderComponent,
        InformacionComponent,
        ContactoComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    exports: [
        HeaderComponent,
        InformacionComponent,
        ContactoComponent
    ]
})

export class SharedModule { }
