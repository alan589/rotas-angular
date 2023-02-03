import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from "./alunos.service";
import { AlunosDesativarGuard } from "../guards/alunos-desativar.guard";
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";
// import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
    // HighlightMouseDirective
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
     AlunosService,
     AlunosDesativarGuard,
     AlunoDetalheResolver
  ]
})
export class AlunosModule { }
