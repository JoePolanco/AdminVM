import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentService {

  constructor(private http: HttpClient) { }

public obtener (url:string){
  return this.http.get <any> (url)
  }

  public actualizarVent(url:string, datos: any){
    console.log(url);
    return this.http.put <any>(url, datos)
  }


}
