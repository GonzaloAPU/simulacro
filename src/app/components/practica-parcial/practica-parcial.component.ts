import { Component } from '@angular/core';
import { PracticaParcialService } from '../../services/practica-parcial.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practica-parcial',
  imports: [CommonModule, FormsModule],
  templateUrl: './practica-parcial.component.html',
  styleUrl: './practica-parcial.component.css'
})
export class PracticaParcialComponent {

   constructor(private practicaParcialService:PracticaParcialService ) {}

  receta:string='';
  listaRecetas:Array<any>=[];


  traduccion:string='';


  buscarRecetas(receta:string){
    this.practicaParcialService.getReceta(receta).subscribe(
      (data:any)=> {
        this.listaRecetas = data;

        console.log(this.listaRecetas);


      },
      (error) => {
        console.log(error);
      }
    )
  }

  traducirReceta(texto:string){
    this.practicaParcialService.getTraductor(texto).subscribe(
      (data:any)=> {
        this.traduccion = data.data.translations.translatedText[0];
        console.log(this.traduccion);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
