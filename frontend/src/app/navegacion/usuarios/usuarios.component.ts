import { Component, OnInit } from '@angular/core';
import {UsuariosService} from 'src/app/services/usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

    public listaUsuarios: any = []

    constructor(private UsuariosService: UsuariosService){

    }

    ngOnInit(): void {
        this.verUsuarios();
    }

    public verUsuarios(){
      this.UsuariosService.obtenerUsuarios('http://localhost:3030/auth/usuarios')
      .subscribe(vusuarios => {
        console.log(vusuarios);
        this.listaUsuarios = vusuarios
       }
       )}
    }

