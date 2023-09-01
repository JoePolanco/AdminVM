import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

      usuario: string="";
      clave:   string="";
      rol:  string="";
      nombres: string="";
      apellidos: string="";
      departamento: string="";
      email: string="";

  constructor(private http: HttpClient){

  }
  register(){
    let bodyData = {
      "usuario": this.usuario,
      "clave": this.clave,
      "rol": this.rol,
      "nombres": this.nombres,
      "apellidos": this.apellidos,
      "departamento": this.departamento,
      "email": this.email
    };
    this.http.post("http://localhost:3030/auth/register",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Registro Existoso");

      this.usuario='';
      this.clave='';
      this.rol='';
      this.nombres='';
      this.apellidos='';
      this.departamento='';
      this.email='';

      });
  }


}
