import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-data-center',
  templateUrl: './crear-data-center.component.html',
  styleUrls: ['./crear-data-center.component.css']
})
export class CrearDataCenterComponent {

        nombreDataCenter: string="";
        idDataCenter:   string="";
        departamentoDataCenter:  string="";
        direccion: string="";

        constructor(private http: HttpClient){

        }
        register(){
          let bodyData = {
            "nombreDataCenter": this.nombreDataCenter,
            "idDataCenter": this.idDataCenter,
            "departamentoDataCenter": this.departamentoDataCenter,
            "direccion": this.direccion
          };
          this.http.post("http://localhost:3030/datacenter",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
          {
            console.log(resultData);
            alert("Registro Existoso");

            this.nombreDataCenter='';
            this.idDataCenter='';
            this.departamentoDataCenter='';
            this.direccion='';

            });
        }

}
