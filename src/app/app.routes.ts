import {Routes} from '@angular/router';
import { EventsComponent } from './events/events.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'turnos', pathMatch: 'full'},
    { path: 'turnos', component: EventsComponent},
    // { path: '/agregar', component: ShopingCartComponent},
]