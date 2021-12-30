import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tema } from 'src/app/model/tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {

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

  deletarTema(){
    this.temaService.deleteTema(this.tema.id).subscribe(() => {
      alert("Tema excluído com sucesso!");
      this.router.navigate(['/temas']);
    });
  }

}
