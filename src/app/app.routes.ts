import { Routes } from '@angular/router';
import {F1RacesComponent} from './components/f1-races/f1-races.component'
import {BooksComponent} from './components/books/books.component'
import {RecipesComponent} from './components/recipes/recipes.component'
import {VideoComponent} from './components/video/video.component'




export const routes: Routes = [
  /*{
    path: '',
    component: F1RacesComponent
  },*/
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'f1-races',
    component: F1RacesComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
