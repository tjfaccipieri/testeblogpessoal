import { Postagem } from './../model/postagem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  foto = environment.foto;
  nome = environment.nome;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];

  listaTemas: Tema[];
  idTema: number;
  tema: Tema = new Tema();

  idUsuario = environment.id;
  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    this.auth.refreshToken();

    this.getAllTemas();
    this.getAllPostagens();

  }

  getUsuarioById() {
    this.auth.getUsuarioById(this.idUsuario).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  getTemaById(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  getPostagemById(id: number){
    this.postagemService.getPostagemById(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    });
  }

  postar(){
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario;

    console.log(this.postagem)

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.getAllPostagens();
      this.getAllTemas();
      alert('Postagem realizada com sucesso!');
      this.postagem = new Postagem();
    });
  }

  editar(){
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario;

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.getUsuarioById();
      alert('Postagem editada com sucesso!');
      this.postagem = new Postagem();
    });
  }

  deletar(){
    this.postagemService.deletePostagem(this.postagem.id).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.getUsuarioById();
      alert('Postagem deletada com sucesso!');
      this.postagem = new Postagem();
    });
  }

  sair() {
    environment.token = '';
    environment.nome = '';
    environment.foto = '';
    environment.usuario = '';
    environment.id = 0;
    this.router.navigate(['/login']);
  }
}
