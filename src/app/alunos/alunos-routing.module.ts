import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from "./alunos.component";

//ROTAS HARD CODED SEMPRE SÃO AVALIADOS PRIMEIROS PARA EVITAR COLISÃO DE ROTAS
// COMPONENTES FILHOS CRIADOS UTILIZANDO CHILDREN
// UTIL PARA QUANDO QUER EVITAR REPETIÇÃO DE NOME DE ROTAS E QUANDO É PRECISO MOSTRAR OS COMPONENTES FILHOS
// JUNTAMENTE COM O COMPONENTE PAI
const alunosRoutes: Routes = [
  {path: 'alunos', component: AlunosComponent, children: [
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent},
    {path: ':id/editar', component: AlunoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
