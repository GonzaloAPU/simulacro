import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApivideoService {

  constructor(private http: HttpClient) { }

  getVideo(name:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'8f02f308f2msh01e826c0b9f1cbep1d7a92jsne837668abe95',
        'x-rapidapi-host':'youtube138.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    const urlDinamica = `https://youtube138.p.rapidapi.com/search?q=${name}`;
    console.log(urlDinamica);

    return this.http.get(urlDinamica,httpOptions);
  }

}
