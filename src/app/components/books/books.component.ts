import { Component } from '@angular/core';
import { ApiBooksService } from '../../services/api-books.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  constructor(private ApiBooksService: ApiBooksService) { }

  anio:number = 2023;
  mes:number = 1;
  listabooks : any[] = [];



  getApiBooks() {
    this.ApiBooksService.getbooks(this.anio, this.mes).subscribe(
      (data) => {
        this.listabooks = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
