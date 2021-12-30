import { Postagem } from "./postagem";

export class Usuario {
  public id: number;
  public nome: string;
  public foto: string;
  public usuario: string; //deve ser um padrão de e-mail
  public senha: string;
  public postagem: Postagem[];
}