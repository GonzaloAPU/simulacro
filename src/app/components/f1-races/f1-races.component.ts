import { Component } from '@angular/core';
import { ApiRacesService } from '../../services/api-races.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-f1-races',
  imports: [FormsModule, CommonModule],
  templateUrl: './f1-races.component.html',
  styleUrl: './f1-races.component.css'
})
export class F1RacesComponent {

  listaraces: any[] = [];
  listaResults : any[] = [];
  listaSessions : any[] = [];
  listaConstructores : any[] = [];

  anioBusqueda:number = 2023;
  sesion:number = 0;
  pri:any;
  ult:any;



  constructor(private apiRacesService: ApiRacesService) {}

  getApiRaces() {
    console.log(this.anioBusqueda);
    this.apiRacesService.getRaces(this.anioBusqueda).subscribe(
      (data) => {
        this.listaraces = data;
        this.listaResults = data.results;
        console.log(this.listaraces);

      },
      (error) => {
        console.log(error);
      }
    );
  }

  getapisessions(sesion:number){
    console.log(sesion);
    this.apiRacesService.getsessions(sesion).subscribe(
      (data) => {
        this.listaSessions = data.results.drivers;
        console.log(this.listaSessions);

        },
      (error) => {
        console.log(error);
      }
    );
  }

  getapiconstructores(construc:number){
    console.log(construc);
    this.apiRacesService.getconstructores(construc).subscribe(
      (data) => {
        this.listaConstructores = data.results;
        console.log(this.listaConstructores);
        this.pri=this.listaConstructores[0].team_name;
        console.log(this.pri);
        this.ult=this.listaConstructores[this.listaConstructores.length-1].team_name;
        console.log(this.ult);

        },
      (error) => {
        console.log(error);
      }
    );


  }



}
