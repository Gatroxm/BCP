import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  path: string = '../data/agencias.json'

  constructor( private http: HttpClient) { }

  getagencias(){
    return this.http.get("/assets/agencias.json");
  }
}
