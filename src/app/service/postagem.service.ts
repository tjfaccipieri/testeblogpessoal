import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://bp2022.herokuapp.com/postagens', this.token);
  }

  getPostagemById(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://bp2022.herokuapp.com/postagens/${id}`, this.token);
  }

  getPostagemByTitulo(titulo: string): Observable<Postagem> {
    return this.http.get<Postagem>(`https://bp2022.herokuapp.com/postagens/titulo/${titulo}`, this.token);
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://bp2022.herokuapp.com/postagens', postagem, this.token);
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`https://bp2022.herokuapp.com/postagens`, postagem, this.token);
  }

  deletePostagem(id: number): Observable<Postagem> {
    return this.http.delete<Postagem>(`https://bp2022.herokuapp.com/postagens/${id}`, this.token);
  }
}
