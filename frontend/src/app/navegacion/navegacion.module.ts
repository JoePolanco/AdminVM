import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NavegacionRoutingModule } from './navegacion-routing.module';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { CrearDataCenterComponent } from './crear-data-center/crear-data-center.component';
import { VentanaMantenimientoComponent } from './ventana-mantenimiento/ventana-mantenimiento.component';
import { CrearVentanaMantenimientoComponent } from './crear-ventana-mantenimiento/crear-ventana-mantenimiento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatacenterComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    CrearDataCenterComponent,
    VentanaMantenimientoComponent,
    CrearVentanaMantenimientoComponent,
  ],
  imports: [
    CommonModule,
    NavegacionRoutingModule,
    FormsModule,

  ],

  exports: [CrearDataCenterComponent]
})

export class NavegacionModule { }
