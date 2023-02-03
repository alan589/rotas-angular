import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';

import { AuthService } from "../login/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CursosGuard implements CanActivateChild{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean
  {
    // if(this.authService.usuarioEstaAutenticado()) return true;
    // this.router.navigate(['/login']);
    // return false;
    console.log('guarda de rota filha')
    return true;
  }
}
