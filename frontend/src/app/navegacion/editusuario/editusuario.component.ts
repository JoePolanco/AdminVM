import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService} from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';


@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent {

      usuario: string="";
      clave:   string="";
      rol:  string="";
      nombres: string="";
      apellidos: string="";
      departamento: string="";
      email: string="";

      editusuario: any;
      idRegistroUser: any;

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, private UsuariosService: UsuariosService){

  }
// para cargar datos edit-datacenter y editar
ngOnInit(): void {
  this.activeRoute.params.subscribe((params)=>{
    this.idRegistroUser=params['id']
    this.UsuariosService.get(`http://localhost:3030/auth/usuarios/findByusuario?id=${params['id']}`)
    .subscribe(respuesta =>{
      console.log(respuesta);
      this.editusuario = respuesta

      this.usuario = respuesta.usuario
      this.clave = respuesta.clave
      this.rol = respuesta.rol
      this.nombres = respuesta.nombres
      this.apellidos = respuesta.apellidos
      this.departamento = respuesta.departamento
      this.email = respuesta.email
    })
  })
}
  EditUser(){
    let bodyData = {
      "usuario": this.usuario,
      "clave": this.clave,
      "rol": this.rol,
      "nombres": this.nombres,
      "apellidos": this.apellidos,
      "departamento": this.departamento,
      "email": this.email
    };
    this.http.put(`http://localhost:3030/auth/usuarios/${this.idRegistroUser}`, bodyData,{responseType: 'json'}).subscribe((resultData: any)=>
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

