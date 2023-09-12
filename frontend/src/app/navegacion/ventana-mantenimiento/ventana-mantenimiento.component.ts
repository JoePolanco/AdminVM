import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import {VentService} from 'src/app/services/vent.service'
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-ventana-mantenimiento',
  templateUrl: './ventana-mantenimiento.component.html',
  styleUrls: ['./ventana-mantenimiento.component.css']
})
export class VentanaMantenimientoComponent implements OnInit {

  public listaVentMant: any = []
  public url: string= 'http://localhost:3030/ventanaMantenimiento';

  constructor(private VentService: VentService){

  }

  ngOnInit(): void {
      this.cargardatos();
   }

    public cargardatos(){
      this.VentService.obtener(this.url)
      .subscribe(obtener =>{
        console.log(obtener);
        this.listaVentMant = obtener
      })
    }
      // Boton cerrar incindente
    public cerrarTicket(_id: string){
      const object={
        estadoDeSolicitud: 'Cerrado'
      }
      console.log(_id);
        this.VentService.actualizarVent(`${this.url}/${_id}`, object).pipe(take(1))
        .subscribe({
          next:value=>{
            console.log(value)
          },
          error:value=>{
            console.log(value);
          }
        })
          this.cargardatos();
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

    exportReportVentanas(){
      if(this.listaVentMant.length === 0){
        console.log('error')
      }
      this.exportToCsv(this.listaVentMant, `Reporte_Ventanas_Mantenimiento_${(new Date()).toLocaleString()}`);
    }

}


