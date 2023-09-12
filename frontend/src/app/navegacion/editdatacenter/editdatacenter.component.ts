import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/services/rest.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editdatacenter',
  templateUrl: './editdatacenter.component.html',
  styleUrls: ['./editdatacenter.component.css']
})
export class EditdatacenterComponent {

  nombreDataCenter: string="";
  idDataCenter:   string="";
  departamentoDataCenter:  string="";
  direccion: string="";
  elementos: string="";

  editdatacenter: any;
  idRegistro: any;

  constructor(private http: HttpClient,  private activeRoute: ActivatedRoute, private RestService: RestService){

  }
// para cargar datos edit-datacenter y editar
  ngOnInit(): void {
      this.activeRoute.params.subscribe((params) =>{
        this.idRegistro=params['id']
        this.RestService.get(`http://localhost:3030/datacenter/findByIdDataCenter?id=${params['id']}`)
        .subscribe(respuesta => {
      console.log(respuesta);
      this.editdatacenter = respuesta

      this.nombreDataCenter = respuesta.nombreDataCenter
      this.idDataCenter = respuesta.idDataCenter
      this.departamentoDataCenter = respuesta.departamentoDataCenter
      this.direccion = respuesta.direccion
      this.elementos = respuesta.elementos

        }
          )
      })
  }

  editarDataCenter(){

    let bodyData = {
      "nombreDataCenter": this.nombreDataCenter,
      "idDataCenter": this.idDataCenter,
      "departamentoDataCenter": this.departamentoDataCenter,
      "direccion": this.direccion,
      "elementos": this.elementos
    };
    this.http.put(`http://localhost:3030/datacenter/${this.idRegistro}`,bodyData,{responseType: 'json'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Edicion Existosa");

      this.nombreDataCenter='';
      this.idDataCenter='';
      this.departamentoDataCenter='';
      this.direccion='';
      this.elementos= '';

      });
  }
}
