import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, UrlSegment } from "@angular/router";
import { Observable } from 'rxjs';

import { AuthService } from "../login/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()) return true;
    this.router.navigate(['/login']);
    return false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean
  {
    console.log('AuthGuard');
    return this.verificarAcesso();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    console.log(`canload: verificando se o usuario pode carregar o codigo do modulo: ${this.verificarAcesso()}`);
    return this.verificarAcesso();
  }
}
