import { Component, OnInit } from '@angular/core';
import { Event } from './Event';
import { EventListService } from '../event-list.service';
import { Calendar, CalendarContent, CalendarData, CalendarDataProvider, CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  calendarOptions: CalendarOptions; 
  lang: string;
  
  public myEvents: any = [];
  public eventsDB: Event[] = [];

  constructor(private events: EventListService) { 
    events.eventList.subscribe((observable) => this.eventsDB = observable);
    events.myEvents.subscribe((observable) => this.myEvents = observable);
    this.lang= navigator.language;
    events.addEvents(
      [
        {
          title: "El Pepaaa",
          start: new Date('2020-10-24T10:00'),
          end: new Date('2020-10-24T16:00'),
          description: "ndeah"
        },
        {
          title: "El Pepe",
          start: new Date('2020-11-10T10:00'),
          end: new Date('2020-11-10T16:00'),
          description: ""
        },
        {
          title: "El Pepa",
          start: new Date('2020-10-10T10:00'),
          end: new Date('2020-10-10T16:00'),
          description: ""
        },
        {
          title: "El Pepa",
          start: new Date('2020-10-10T16:30'),
          end: new Date('2020-10-10T17:00'),
          description:"sape",
        }
      ] 
    );
    this.calendarOptions= {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      // initialView: 'dayGridMonth', //Ver para que sirve
      events: this.eventsDB,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      // themeSystem: 'Bostrap', // Investigar como cambiar el tema del Calendario
      // timeZone: 'UTC', Se adelante por unas horas
      locale: this.lang,
      dateClick: (e) =>  {
        console.log(e); //Esto serviria para ir a otro Componente con detalles sobre el evento
      },      
    }
  }

  // addMyEvent(event : Event){
  //   let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
  //   let value = {
  //     title: event.title,
  //     start: new Date(event.start).toLocaleDateString("es-ES", options),
  //     end: new Date(event.end).toLocaleDateString("es-ES", options),
  //     description: event.description
  //   }
  //   this.myEvents.push(value);
  // }
  showError(value : String){
    alert(value);
  }

  //Ver como implementar el Hover para ver la description del evento
  viewDetail(item){
    console.log(item);
  }
  // viewDetail(info) {
  //   var tooltip = new Tooltip(info.el, {
  //     title: info.event.extendedProps.description,
  //     placement: 'top',
  //     trigger: 'hover',
  //     container: 'body'
  //   });
  // }

  ngOnInit(): void {
    console.log(this.lang);
  } 
}
