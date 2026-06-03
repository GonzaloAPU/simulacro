import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuperatorioService {
  constructor(private http: HttpClient) { }

  getDetalles(id:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'wft-geo-db.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    const urlDinamica = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${id}`;
      console.log(urlDinamica);

      return this.http.get(urlDinamica,httpOptions);
  }

  getPais(anio: number , codigo:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'public-holidays7.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    const urlDinamica = `https://public-holidays7.p.rapidapi.com/${anio}/${codigo}`;
      console.log(urlDinamica);


      return this.http.get(urlDinamica,httpOptions);
}

getcodes(){
  let httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
      'x-rapidapi-host':'public-holidays7.p.rapidapi.com',
      'Content-Type':'application/json'
    })
  }
  const urlDinamica = `https://public-holidays7.p.rapidapi.com/codes`;
    console.log(urlDinamica);

    return this.http.get(urlDinamica,httpOptions);
}
}
