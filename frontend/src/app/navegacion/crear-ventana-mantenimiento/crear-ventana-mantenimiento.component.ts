import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-ventana-mantenimiento',
  templateUrl: './crear-ventana-mantenimiento.component.html',
  styleUrls: ['./crear-ventana-mantenimiento.component.css']
})
export class CrearVentanaMantenimientoComponent {

        nombreDataCenter: string="";
        idDataCenter:   string="";
        usuarioIngresoVM: string="";
        tipoMantenimiento:  string="";
        fechaInicio: string="";
        fechaFin:  string="";
        horaInicio: string="";
        horaFin: string="";
        justificacionDeActividad: string="";
        rda: string="";
        estadoDeSolicitud: string="";

        constructor(private http: HttpClient){

        }
        registerr(){
          let bodyData = {
            "nombreDataCenter": this.nombreDataCenter,
            "idDataCenter": this.idDataCenter,
            "usuarioIngresoVM": this.usuarioIngresoVM,
            "tipoMantenimiento": this.tipoMantenimiento,
            "fechaInicio": this.fechaInicio,
            "fechaFin": this.fechaFin,
            "horaInicio": this.horaInicio,
            "horaFin": this.horaFin,
            "justificacionDeActividad": this.justificacionDeActividad,
            "rda": this.rda,
            "estadoDeSolicitud": this.estadoDeSolicitud

          };
          this.http.post("http://localhost:3030/ventanaMantenimiento",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
          {
            console.log(resultData);
            alert("Registro Existoso");

            this.nombreDataCenter='';
            this.idDataCenter='';
            this.usuarioIngresoVM='';
            this.tipoMantenimiento='';
            this.fechaInicio='';
            this.fechaFin='';
            this.horaInicio='';
            this.horaFin='';
            this.justificacionDeActividad='';
            this.rda='';
            this.estadoDeSolicitud='';

            });
        }

}


