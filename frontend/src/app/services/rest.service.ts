import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public url: any;


  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get<any>(url) // Get a la API de localhost:3030/datacenter
  };

  // metodo para eliminar Data Center por ID
    deletedatacenter(id:number){
      let url = `${this.url}/${id}`;
      console.log(url);
      return this.http.delete(url);
    }


}
