import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearDataCenterComponent } from './crear-data-center/crear-data-center.component';
import { CrearUsuarioComponent} from './crear-usuario/crear-usuario.component'
import { VentanaMantenimientoComponent } from './ventana-mantenimiento/ventana-mantenimiento.component';
import { CrearVentanaMantenimientoComponent } from './crear-ventana-mantenimiento/crear-ventana-mantenimiento.component';

const routes: Routes = [
 { path: 'datacenter', component: DatacenterComponent},
 { path: 'usuarios', component: UsuariosComponent},
 { path: 'crear-data-center', component: CrearDataCenterComponent},
 { path: 'crear-usuario', component: CrearUsuarioComponent},
 { path: 'ventana-mantenimiento', component: VentanaMantenimientoComponent},
 { path: 'crear-ventana-mantenimiento', component: CrearVentanaMantenimientoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacionRoutingModule { }
