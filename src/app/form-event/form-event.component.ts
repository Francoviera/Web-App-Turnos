import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '../events/Event';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit {

  public event: Event;

  constructor() { 
    this.event= {
      title: '',
      start: new Date(),
      end: new Date(),
      description: ''
    }
  }

  @Input()
    eventsDB: any;
  @Input()
    myEvents: any;
  
  @Output()
    addMyEvent: EventEmitter<Event> = new EventEmitter<Event>();
  @Output()
    showError: EventEmitter<String> = new EventEmitter<String>();
  @Output()
    eventsDBChange: EventEmitter<Event> = new EventEmitter<Event>();

  addEvent(){
    if(this.timeCheck()){
      this.eventsDB.push(this.event);
      this.eventsDBChange.emit();
      this.addMyEvent.emit(this.event);
      this.event= {
        title: '',
        start: new Date(),
        end: new Date(),
        description: ''
      }
    }else{
      this.showError.emit("Ingrese fechas de inicio y fin Validas!");
      this.event.start= new Date();
      this.event.end= new Date();
    }
  }
  timeCheck(){
    if(this.event.start >= this.event.end){
      return false
    }
    // for (let e of this.eventsDB) {
    //   if(this.event.start >= e.start && this.event.start <= e.start){
    //     console.log(e);
    //   }
    // }

    return true;
  }

  ngOnInit(): void {
  }

}
