import {Routes} from '@angular/router';
import { TurnosComponent } from './turnos/turnos.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'turnos', pathMatch: 'full'},
    { path: 'turnos', component: TurnosComponent},
    // { path: '/agregar', component: ShopingCartComponent},
]