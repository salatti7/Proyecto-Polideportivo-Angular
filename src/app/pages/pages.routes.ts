import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PistasComponent } from './pistas/pistas.component';
import { GeneralPistasComponent } from './general-pistas/general-pistas.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        //canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'pistas', component: GeneralPistasComponent }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );