import { Injectable } from '@angular/core';
import {  UrlTree, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs';

import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./iform-candeactivate";
@Injectable()
export class AlunosDesativarGuard implements CanDeactivate<IFormCanDeactivate> {
  // constructor(private permissions: Permissions, private currentUser: UserToken) {}

  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    console.log('Guarda de desativação');
    // return component.podeMudarRota();
    return component.podeDesativar();
  }
}
