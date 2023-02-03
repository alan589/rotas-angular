import { Injectable, EventEmitter } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';

import { AuthService } from "../login/auth.service";
import { UsuariosService } from "../login/usuarios.service";
@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild{

  constructor(
    private authService: AuthService,
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean
  {
    // console.log(route)
    // console.log(state)
    console.log('AlunosGuard: guarda de rota filho');
    // if(state.url.includes('editar')){
    //   // logica
    //   if(this.usuariosService.getUsuario().admin === false) {
    //     alert('Usuário sem permissão');
    //     return false;
    //   }
    // }
    return true;


  }
}
