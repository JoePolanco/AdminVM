import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url: string='http://localhost:3030';
  constructor(private http: HttpClient) { }

  public obtenerUsuarios (url: string){
    return this.http.get<any> (url)
  }
// metodo para edit usuarios
  public get (url: string){
    return this.http.get<any> (url)
  }

  // metodo para eliminar Data Center por ID
  deleteUsuario(id:number){
    let url = `${this.url}/${id}`;
    console.log(url);
    return this.http.delete(url);
  }

  // Login
  signIn(email: string, password: string){
    return this.http.post <any> (`${this.url}/auth/login`,{usuario: email, clave: password});

  }

}
