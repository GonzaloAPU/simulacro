import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRacesService {

  constructor(private http: HttpClient) { }

  getRaces(anio: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95'
        ,'x-rapidapi-host':'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type':'application/json'

      })
    }

    const urlDinamica = `https://f1-live-motorsport-data.p.rapidapi.com/races/${anio}`;
    console.log(urlDinamica);

    return this.http.get(urlDinamica,httpOptions);
  }

  getsessions(sesion:number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type':'application/json'})
    }
    const urlDinamica = `https://f1-live-motorsport-data.p.rapidapi.com/session/${sesion}`;
    console.log(urlDinamica);

    return this.http.get(urlDinamica,httpOptions);
  }

  getconstructores(construc:number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95'
        ,'x-rapidapi-host':'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
      const urlDinamica = `https://f1-live-motorsport-data.p.rapidapi.com/constructors/${construc}`;
      console.log(urlDinamica);

      return this.http.get(urlDinamica,httpOptions);
  }


}
