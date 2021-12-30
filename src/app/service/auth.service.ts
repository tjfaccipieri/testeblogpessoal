import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/usuario';
import { UsuarioLogin } from '../model/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  constructor(private http: HttpClient) { }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://bp2022.herokuapp.com/usuarios', this.token);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://bp2022.herokuapp.com/usuarios/${id}`, this.token);
  }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://bp2022.herokuapp.com/usuarios/logar', usuarioLogin);
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://bp2022.herokuapp.com/usuarios/cadastrar', usuario);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://bp2022.herokuapp.com/usuarios/atualizar', usuario, this.token);
  }

  logado(){
    let ok: boolean = false;
    if (environment.token != ''){
      ok = true;
    }
    return ok;
  }
}
