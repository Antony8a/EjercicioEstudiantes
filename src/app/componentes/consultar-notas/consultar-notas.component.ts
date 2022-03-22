import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-consultar-notas',
  templateUrl: './consultar-notas.component.html',
  styleUrls: ['./consultar-notas.component.css']
})
export class ConsultarNotasComponent implements OnInit {

  @Input() estudiantes: any[]=[];

  constructor() { }

  ngOnInit(): void {
  }


}
