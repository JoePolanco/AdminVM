import { Component, OnInit } from '@angular/core';
import {VentService} from 'src/app/services/vent.service'

@Component({
  selector: 'app-ventana-mantenimiento',
  templateUrl: './ventana-mantenimiento.component.html',
  styleUrls: ['./ventana-mantenimiento.component.css']
})
export class VentanaMantenimientoComponent implements OnInit {

  public listaVentMant: any = []

  constructor(private VentService: VentService){

  }

  ngOnInit(): void {
      this.cargardatos();
   }

    public cargardatos(){
      this.VentService.obtener('http://localhost:3030/ventanaMantenimiento')
      .subscribe(obtener =>{
        console.log(obtener);
        this.listaVentMant = obtener
      })
    }
}


