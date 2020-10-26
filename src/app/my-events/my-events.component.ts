import { Component, Input, OnInit } from '@angular/core';
import { EventListService } from '../event-list.service';
import { Event } from '../events/Event';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  constructor(private eventList : EventListService) { }
  @Input()
  event: Event;

  ngOnInit(): void {
  }

}
