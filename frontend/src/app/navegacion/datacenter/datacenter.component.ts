import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

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

}
