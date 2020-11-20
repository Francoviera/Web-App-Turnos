import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventListService } from '../event-list.service';
import { Event } from '../events/Event';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit {

  public event: Event;

  constructor(private events: EventListService) { 
    this.event= {
      ui: this.events.getUi(),
      title: '',
      start: new Date(),
      end: new Date(),
      description: ''
    }
  }

  @Output()
    showError: EventEmitter<String> = new EventEmitter<String>();

  async addEvent(){
    let result = await this.events.addEvent(this.event);
    if(result === null){
      this.event= {
        ui: this.events.getUi(),
        title: '',
        start: new Date(),
        end: new Date(),
        description: ''
      }
    }else{
      this.showError.emit(result);
      this.event.start= new Date();
      this.event.end= new Date();
    }
  }

  ngOnInit(): void {
  }
}
