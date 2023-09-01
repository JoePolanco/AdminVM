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

}
