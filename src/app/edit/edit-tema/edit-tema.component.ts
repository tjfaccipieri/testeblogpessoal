import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-tema',
  templateUrl: './edit-tema.component.html',
  styleUrls: ['./edit-tema.component.css'],
})
export class EditTemaComponent implements OnInit {
  tema: Tema = new Tema();

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == ''){
      this.router.navigate(['/login']);
    }

    let id = this.route.snapshot.params['id'];
    this.getTemaById(id);
  }

  getTemaById(id: number){
    this.temaService.getTemaById(id).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }


  atualizarTema(){
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      alert("Tema atualizado com sucesso!");
      this.tema = new Tema();
      this.router.navigate(['/temas']);
    });
  }
}
