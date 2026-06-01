import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulacroService {

  constructor(private http: HttpClient) { }

  getApi(name:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'local-business-data.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }

      const body = {
      queries:[name],
      limit : '10',
      region : 'ar',
      language: 'es'
    }
   const url = 'https://local-business-data.p.rapidapi.com/search';

  return this.http.post(url,body,httpOptions);

  }

  getDetails(id:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'local-business-data.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    const urlDinamica = `https://local-business-data.p.rapidapi.com/business-details?business_id=${id}`;
      console.log(urlDinamica);
      console.log(id);


      return this.http.get(urlDinamica,httpOptions);

  }

}
