import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {F1RacesComponent} from './components/f1-races/f1-races.component'
import {BooksComponent} from './components/books/books.component'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet/*, F1RacesComponent, BooksComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simulacro';
}
