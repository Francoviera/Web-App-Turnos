import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnosComponent } from './turnos/turnos.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { FormTurnosComponent } from './form-turnos/form-turnos.component';

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin
// ]);
@NgModule({
  declarations: [
    AppComponent,
    TurnosComponent,
    MisTurnosComponent,
    FormTurnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
