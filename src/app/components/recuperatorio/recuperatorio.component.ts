import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecuperatorioService } from '../../services/recuperatorio.service';

@Component({
  selector: 'app-recuperatorio',
  imports: [FormsModule, CommonModule],
  templateUrl: './recuperatorio.component.html',
  styleUrl: './recuperatorio.component.css'
})
export class RecuperatorioComponent {

  constructor(private recuperatorio: RecuperatorioService) {}

  listapais:any[]=[]
  listacodes:any[]=[]
  listadetalles:any={}
  codigo:string='';
  anio:number=0;

  buscarPais(){
    this.recuperatorio.getPais(this.anio, this.codigo).subscribe(
      (data:any)=> {
        this.listapais = data;
        console.log(this.listapais);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  buscarDetalles(){
    this.recuperatorio.getDetalles(this.codigo).subscribe(
      (data:any)=> {
        this.listadetalles = data;
        console.log(this.listadetalles);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  buscarCodes(){
    this.recuperatorio.getcodes().subscribe(
      (data:any)=> {
        this.listacodes = data;
        console.log(this.listacodes);
      },
      (error) => {
        console.log(error);
      }
    )

  }


}
