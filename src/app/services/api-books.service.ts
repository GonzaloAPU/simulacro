import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {

  constructor(private http: HttpClient) { }

   getbooks(anio:number, mes:number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'hapi-books.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
      const urlDinamica = `https://hapi-books.p.rapidapi.com/month/${anio}/${mes}`;
      console.log(urlDinamica);

      return this.http.get(urlDinamica,httpOptions);
  }

  getApiInformation(idbook:number){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'hapi-books.p.rapidapi.com',
        'Content-Type':'application/json'
      })
      }
    const urlDinamica2 = `https://hapi-books.p.rapidapi.com/book/${idbook}`;
    console.log(urlDinamica2);

    return this.http.get(urlDinamica2,httpOptions);
  }



}


