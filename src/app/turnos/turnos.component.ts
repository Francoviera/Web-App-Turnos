import { Component, OnInit } from '@angular/core';
import { Turno } from './Turno';
import { Calendar, CalendarContent, CalendarData, CalendarDataProvider, CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {

  // eventsDB: any; //Averiguar de que tipo es esta variable
  calendarOptions: CalendarOptions; 
  lang: string;
  
  public misTurnos: any = [];
  public eventsDB: any;
  public turno: Turno;

  constructor() { 
    this.lang= navigator.language;
    this.turno= {
      title: '',
      start: new Date(),
      end: new Date(),
      description: ''
    }
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

  addEvent(){
    console.log(this.turno);
    this.eventsDB.push(this.turno);
    console.log(this.eventsDB);
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    let value = {
      title: this.turno.title,
      start: new Date(this.turno.start).toLocaleDateString("es-ES", options),
      end: new Date(this.turno.end).toLocaleDateString("es-ES", options),
      description: this.turno.description
    }
    this.misTurnos.push(value);
    this.turno= {
      title: '',
      start: new Date(),
      end: new Date(),
      description: ''
    }
    // if(this.timecheck){

    // }
  }
  timecheck(value){
    let check: boolean= false
    for (let e of this.eventsDB) {
      if(this.turno.start >= e.start && this.turno.start <= e.start){
        console.log(e);
      }
    }

    return check;
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
