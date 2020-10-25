import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { FormEventComponent } from './form-event/form-event.component';

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin
// ]);
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    MyEventsComponent,
    FormEventComponent
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
