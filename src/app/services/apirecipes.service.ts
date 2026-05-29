import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirecipesService {

  constructor(private http: HttpClient) { }

  getrecipes(name:string, tags:string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'low-carb-recipes.p.rapidapi.com',
        'Content-Type':'application/json'

    })


  }
  const urlDinamica = `https://low-carb-recipes.p.rapidapi.com/search?name=${name}&tags=${tags}`;
      console.log(urlDinamica);

      return this.http.get(urlDinamica,httpOptions);
}

  getApiTraductor(descripcion:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
  }

  const body = {
    q:descripcion,
    source : 'en',
    target : 'es'
  }

  const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';

  return this.http.post(url,body,httpOptions);


  }
}


