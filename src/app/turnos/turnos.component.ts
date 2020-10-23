import { Component, OnInit } from '@angular/core';
import { CalendarContent, CalendarData, CalendarDataProvider, CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {

  eventsDB: any; //Averiguar de que tipo es esta variable
  calendarOptions: CalendarOptions; 
  lang: string;


  constructor() { 
    this.lang= navigator.language;
    this.eventsDB = [
      {
        title: "El Pepaaa",
        start: '2020-10-23T10:00:00',
        end: '2020-10-23T16:00:00',
        description: "ndeah"
      },
      {
        title: "El Pepe",
        start: '2020-11-10T10:00:00',
        end: '2020-11-10T16:00:00',
      },
      {
        title: "El Pepa",
        start: '2020-10-10T10:00:00',
        end: '2020-10-10T16:00:00',
      },
      {
        title: "El Pepa",
        start: '2020-10-10T16:30:00',
        end: '2020-10-10T17:00:00',
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
