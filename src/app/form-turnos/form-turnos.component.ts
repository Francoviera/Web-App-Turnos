import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Turno } from '../turnos/Turno';

@Component({
  selector: 'app-form-turnos',
  templateUrl: './form-turnos.component.html',
  styleUrls: ['./form-turnos.component.scss']
})
export class FormTurnosComponent implements OnInit {

  public turno: Turno;

  constructor() { 
    this.turno= {
      title: '',
      start: new Date(),
      end: new Date(),
      description: ''
    }
  }

  @Input()
    eventsDB: any;
  @Input()
    misTurnos: any;
  
  @Output()
    addMiTurno: EventEmitter<Turno> = new EventEmitter<Turno>();
  @Output()
    showError: EventEmitter<String> = new EventEmitter<String>();
  @Output()
    eventsDBChange: EventEmitter<Turno> = new EventEmitter<Turno>();

  addEvent(){
    if(this.timeCheck()){
      this.eventsDB.push(this.turno);
      this.eventsDBChange.emit();
      this.addMiTurno.emit(this.turno);
      this.turno= {
        title: '',
        start: new Date(),
        end: new Date(),
        description: ''
      }
    }else{
      this.showError.emit("Ingrese fechas de inicio y fin Validas!");
      this.turno.start= new Date();
      this.turno.end= new Date();
    }
  }
  timeCheck(){
    if(this.turno.start >= this.turno.end){
      return false
    }
    // for (let e of this.eventsDB) {
    //   if(this.turno.start >= e.start && this.turno.start <= e.start){
    //     console.log(e);
    //   }
    // }

    return true;
  }

  ngOnInit(): void {
  }

}
