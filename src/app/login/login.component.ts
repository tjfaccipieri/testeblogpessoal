import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/usuarioLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  entrar(){
    this.auth.login(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp;
      
      
      environment.foto = this.usuarioLogin.foto;
      environment.id = this.usuarioLogin.id;
      environment.nome = this.usuarioLogin.nome;
      environment.token = this.usuarioLogin.token;
      environment.usuario = this.usuarioLogin.usuario;
      
      // console.log(environment)
      this.router.navigate(['/inicio']);
    }, err => {
      if (err.status == 401){
        alert("Usuário ou senha inválidos!");
      }
    }
    );
  }

}
