import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        //canActivate: [ LoginGuardGuard ],
        /*children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios' } },
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales' } },
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de medicos' } },
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Mantenimiento de medico' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]*/
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );