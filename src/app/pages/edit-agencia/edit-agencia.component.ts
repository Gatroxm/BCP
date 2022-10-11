import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/interfaces/Agencia.interface';
import { Loader } from "@googlemaps/js-api-loader";
@Component({
  selector: 'app-edit-agencia',
  templateUrl: './edit-agencia.component.html',
  styleUrls: ['./edit-agencia.component.scss']
})
export class EditAgenciaComponent implements OnInit {
  listaAgencias: Agencia[];
  Agencia: FormGroup;
  constructor(private rutaActiva: ActivatedRoute, private router: Router) {
    const loader = new Loader({
      apiKey: "AIzaSyBwn3YSGPOLB_R6jeddzAB7POvl1J23Bug",
      version: "weekly"
    });
    this.Agencia = new FormGroup({
      id: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lon: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required),
      distrito: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      agencia :new FormControl('', Validators.required),
    })
    this.listaAgencias = JSON.parse(localStorage.getItem('agencias'));
    this.rutaActiva.params.subscribe( resp => {
      const agencia = this.listaAgencias.find( a => a.id === resp.id)
      this.Agencia.setValue({
        id: agencia.id,
        lat: agencia.lat,
        lon: agencia.lon,
        provincia: agencia.provincia,
        distrito: agencia.distrito,
        direccion: agencia.direccion,
        departamento: agencia.departamento,
        agencia :agencia.agencia,
      })
      loader.load().then(() => {
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      });
      console.log(this.Agencia);
    })

  }

  ngOnInit(): void {
  }
  guardar():void{ 
    this.listaAgencias = this.listaAgencias.filter(a => a.id !== this.Agencia.value.id);
    this.listaAgencias.push(this.Agencia.value);
    localStorage.removeItem('agencias');
    localStorage.setItem('agencias', JSON.stringify(this.listaAgencias));
    this.router.navigate(['/'])
  }
}
