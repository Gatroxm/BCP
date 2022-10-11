import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EditAgenciaComponent } from './edit-agencia/edit-agencia.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const pages = [ListadoComponent,EditAgenciaComponent]

@NgModule({
    declarations:[pages ],
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,
    ReactiveFormsModule,
    ],
    exports: [pages]
})
export class PagesModule {}