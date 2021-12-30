import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  confirmarSenha: string

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;
  }

  cadastrar(){
    if (this.usuario.senha == this.confirmarSenha){
    this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      alert("Cadastro realizado com sucesso!");
      this.router.navigate(['/login']);
    })
  } else {
    alert("As senhas não conferem!");
    }
  } 
}
