import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  register:FormGroup;

  listEstudiantes:any[]= [];
 
  constructor(private fb:FormBuilder) {
    this.register = this.fb.group({
      nombre:['',Validators.required],
      nota1:['',[Validators.required,Validators.min(0),Validators.max(5)]],
      nota2:['',[Validators.required,Validators.min(0),Validators.max(5)]],
      nota3:['',[Validators.required,Validators.min(0),Validators.max(5)]]
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.register.value.promedio)
    console.log(this.register.value.nota1)

    const estudiante:Estudiante={
      nombre: this.register.value.nombre,
      nota1: this.register.value.nota1,
      nota2: this.register.value.nota2,
      nota3: this.register.value.nota3,
      promedio: this.calcularPromedio(Number(this.register.value.nota1),Number(this.register.value.nota2),Number(this.register.value.nota3)),
      estado: ''
    }

    estudiante.estado = this.estado(estudiante.promedio)
    this.listEstudiantes.push(estudiante);

  }

  calcularPromedio(nota_1:number,nota_2:number,nota_3:number) : number{
    return (nota_1 + nota_2 + nota_3)/3;
  }

  estado(promedio:number) : any{
    if(promedio >= 3){
      return 'aprobado';
    }else if(promedio == 0){
      return 'excluido';
    }
    return 'reprobado';
  }

  

}
