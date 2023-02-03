import { Injectable } from '@angular/core';
import { IUsuarios, usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: IUsuarios[] = usuarios;
  usuarioLogado;

  constructor() { }

  usuarioExiste(usuario){
    const usuarioExiste = this.usuarios.some(u => (u.nome === usuario.nome) && (u.senha === usuario.senha));

    if(usuarioExiste) {
        this.usuarioLogado = this.usuarios.find(u => (u.nome === usuario.nome) && (u.senha === usuario.senha));
        return true;
    }

    return false;
  }

  getUsuario(){
    return this.usuarioLogado;
  }
}
