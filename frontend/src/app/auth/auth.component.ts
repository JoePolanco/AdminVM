import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuariosService} from 'src/app/services/usuarios.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
      loginForm: FormGroup=this.formBuilder.group({
        usuario: ['',[Validators.required]],
        clave: ['']
      })

    constructor (private formBuilder:FormBuilder, private usuarioService: UsuariosService, private router: Router){

     }

     ngOnInit(): void {

     }

     login(){
      const {usuario, clave}= this.loginForm.value;
      this.usuarioService.signIn(usuario, clave).pipe(take(1))
      .subscribe({
        next: res=>{
          this.router.navigate(['/dashboard/navegacion/datacenter'])
        },
        complete: ()=> console.log("Login Existoso"),
        error: err=> console.log(err)

      })
     }

}
