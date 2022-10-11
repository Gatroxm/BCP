import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAgenciaComponent } from './pages/edit-agencia/edit-agencia.component';
import { ListadoComponent } from './pages/listado/listado.component';

const router: Routes = [
    { path: '', component: ListadoComponent},
    { path: ':id', component: EditAgenciaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {}