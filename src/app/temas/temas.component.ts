import { Router } from '@angular/router';
import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/tema';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  tema: Tema = new Tema();
  listaTemas: Tema[] 

  constructor(private temaService: TemaService, private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0);
    // if (environment.token == ''){
    //   this.router.navigate(['/login']);
    // }

    this.getTemas()
  }

  getTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    })
  }

  postTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      alert("Tema cadastrado com sucesso!");
      this.tema = new Tema();
      this.getTemas();
    })
  }

}
