import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosService } from "./cursos.service";

import { CursosRoutingModule } from "./cursos.routing.module";
// import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
    // HighlightMouseDirective
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
