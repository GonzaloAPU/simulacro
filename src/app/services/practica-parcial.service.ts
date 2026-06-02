import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticaParcialService {

 constructor(private http: HttpClient) { }

  getReceta(name:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'low-carb-recipes.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    const urlDinamica = `https://low-carb-recipes.p.rapidapi.com/search?name=${name}`;
    console.log(urlDinamica);

    return this.http.get(urlDinamica,httpOptions);
  }
  getTraductor(receta:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'deep-translate1.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }

      const body = {
      q: receta,
      source: 'en',
      target: 'es'
    }
   const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';

  return this.http.post(url,body,httpOptions);

  }


}

