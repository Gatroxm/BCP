import { Component, OnInit } from '@angular/core';
import { Agencia } from 'src/app/interfaces/Agencia.interface';
import { AgenciaService } from 'src/app/services/agencia-service.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listaAgencias: Agencia[];
  constructor( public listado: AgenciaService, private roter: Router) { 
    if(!localStorage.getItem('agencias')){

      this.listado.getagencias().subscribe( (resp:any) => {
        this.listaAgencias = resp;
        localStorage.setItem('agencias', JSON.stringify(this.listaAgencias));
      });
    } else {
      this.listaAgencias = JSON.parse(localStorage.getItem('agencias'));
    }
  }

  ngOnInit(): void {
  }
  view(id:string): void {
    this.roter.navigate([`/${id}`])
  }
}
