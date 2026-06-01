import { Component } from '@angular/core';
import { ApivideoService } from '../../services/apivideo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimulacroService } from '../../services/simulacro.service';

@Component({
  selector: 'app-simulacro',
  imports: [CommonModule, FormsModule],
  templateUrl: './simulacro.component.html',
  styleUrl: './simulacro.component.css'
})
export class SimulacroComponent {

  constructor(private simulacroService:SimulacroService ) {}

  name:string='';
  listaHoteles:any[]=[];
  parametros:any[]=[];

  buscarHoteles(){
    this.simulacroService.getApi(this.name).subscribe(
      (data:any)=> {
        this.listaHoteles = data.data;

        console.log(this.listaHoteles);

      },
      (error) => {
        console.log(error);
      }
    )
  }

  getDetails(id:string){
    this.simulacroService.getDetails(id).subscribe(
      (data:any)=> {
        this.parametros = data.data;
        console.log(this.parametros);
        console.log(id);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
