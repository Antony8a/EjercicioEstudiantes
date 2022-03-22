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
      nota1:['',Validators.required],
      nota2:['',Validators.required],
      nota3:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    

    const estudiante:Estudiante={
      nombre: this.register.value.nombre,
      nota1: this.register.value.nota1,
      nota2: this.register.value.nota2,
      nota3: this.register.value.nota3,
      promedio: this.calcularPromedio(Number(this.register.value.nota1),Number(this.register.value.nota2),Number(this.register.value.nota3)),
      estado: this.estado(Number(this.register.value.promedio))
    }
    
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
