import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
      loginForm=this.formBuilder.group({
        usuario: ['joel.polanco'],
        clave: ['']
      })

    constructor (private formBuilder:FormBuilder){ }

     ngOnInit(): void {

     }

}
