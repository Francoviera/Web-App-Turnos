import { Component, OnInit } from '@angular/core';
import { Event } from './Event';
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

  // eventsDB: any; //Averiguar de que tipo es esta variable
  calendarOptions: CalendarOptions; 
  lang: string;
  
  public myEvents: any = [];
  public eventsDB: any;

  constructor() { 
    this.lang= navigator.language;
    this.addMyEvent(
      {
        title: "El Pepaaa",
        start: new Date('2020-10-24T10:00'),
        end: new Date('2020-10-24T16:00'),
        description: "ndeah"
      }
    );
    this.eventsDB = [
      {
        title: "El Pepaaa",
        start: '2020-10-24T10:00',
        end: '2020-10-24T16:00',
        description: "ndeah"
      },
      {
        title: "El Pepe",
        start: '2020-11-10T10:00',
        end: '2020-11-10T16:00',
      },
      {
        title: "El Pepa",
        start: '2020-10-10T10:00',
        end: '2020-10-10T16:00',
      },
      {
        title: "El Pepa",
        start: '2020-10-10T16:30',
        end: '2020-10-10T17:00',
        description:"sape",
      }
    ] 
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
      timeZone: 'UTC',
      locale: this.lang,
      dateClick: (e) =>  {
        console.log(e); //Esto serviria para ir a otro Componente con detalles sobre el evento
      },      
    }
  }

  addMyEvent(event : Event){
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    let value = {
      title: event.title,
      start: new Date(event.start).toLocaleDateString("es-ES", options),
      end: new Date(event.end).toLocaleDateString("es-ES", options),
      description: event.description
    }
    this.myEvents.push(value);
  }
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
