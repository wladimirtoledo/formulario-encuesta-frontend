import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private baseURL = "http://localhost:8080/api/v1/genero";

  constructor(private httpClient : HttpClient) { }

  obtenerListaGenero():Observable<Genero[]>{
    return this.httpClient.get<Genero[]>(`${this.baseURL}`)
  }

  registrarGenero(genero:Genero) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, genero);
  }
  
}
