import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { UsuariosService } from "./usuarios.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioAutenticado: boolean = false;
  emitirAutenticacao = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  fazerLogin(usuario){
    if(this.usuariosService.usuarioExiste(usuario)){
      this.usuarioAutenticado = true;
      alert('Usuário autenticado!')
      this.router.navigate(['/']);
      this.emitirAutenticacao.emit(this.usuarioAutenticado);
    }else{
      this.usuarioAutenticado = false;
      this.emitirAutenticacao.emit(this.usuarioAutenticado);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
