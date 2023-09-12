import { Component, OnInit } from '@angular/core';
import {UsuariosService} from 'src/app/services/usuarios.service'
import { saveAs } from 'file-saver';

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

       // Borrar Usuario
    Borrarusuario(listUser: any  ): void{
      this.UsuariosService.url='http://localhost:3030/auth/usuarios';
      if(!listUser) return;
      this.UsuariosService.deleteUsuario(listUser)
      .subscribe({
        next: (value)=> console.log(value),
        error :(value)=> console.log(value)
    })
    this.verUsuarios();
    }

       // Exportar Datos a CVS
    exportToCsv(data: any[], fileName: string) {
      const separator = ',';
      const keys = Object.keys(data[0]);
      const csvContent = keys.join(separator) + '\n' + data.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date ? cell.toLocaleString() : cell.toString();
          cell = cell.replace(/"/g, '""');
          return '"' + cell + '"';
        }).join(separator);
      }).join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, fileName + '.csv');
    }

    exportReportUsuarios(){
      if(this.listaUsuarios.length === 0){
        console.log('error')
      }
      this.exportToCsv(this.listaUsuarios, `Reporte_Usuarios_${(new Date()).toLocaleString()}`);
    }

    }

