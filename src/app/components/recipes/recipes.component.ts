import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ApirecipesService} from '../../services/apirecipes.service'


@Component({
  selector: 'app-recipes',
  imports: [CommonModule, FormsModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  constructor(private ApirecipesService: ApirecipesService) { }
  name:string = 'pizza';
  tags:string = 'keto';
  listarecipes : any[] = [];

  getApiRecipes(){
    this.ApirecipesService.getrecipes(this.name, this.tags).subscribe(
      (data) => {
        this.listarecipes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
