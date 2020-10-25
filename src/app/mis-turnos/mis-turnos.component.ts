import { Component, Input, OnInit } from '@angular/core';
import { Turno } from '../turnos/Turno';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent implements OnInit {

  constructor() { }
  @Input()
  turno: Turno;

  ngOnInit(): void {
  }

}
