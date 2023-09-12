import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-datacenter',
  templateUrl: './datacenter.component.html',
  styleUrls: ['./datacenter.component.css']
})
export class DatacenterComponent implements OnInit {

 public listaDataCenter: any = []

 constructor(private RestService: RestService){

   }

   ngOnInit(): void {
    this.cargardata();

   }

   public cargardata(){
    this.RestService.get('http://localhost:3030/datacenter')
    .subscribe(respuesta => {
  console.log(respuesta);
  this.listaDataCenter = respuesta
    }
      )}
// Borrar Data Center
    Borrar(idlistVent: any  ): void{
      this.RestService.url='http://localhost:3030/datacenter';
      if(!idlistVent) return;
      this.RestService.deletedatacenter(idlistVent)
      .subscribe({
        next: (value)=> console.log(value),
        error :(value)=> console.log(value)
    })
    this.cargardata();
    }

// Exportar Datos a CSV
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

exportListDataCenter(){
  if(this.listaDataCenter.length === 0){
    console.log('error')
  }
  this.exportToCsv(this.listaDataCenter, `Reporte_Data_Center_${(new Date()).toLocaleString()}`);
}
      }


