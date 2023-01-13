import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlunosService } from "../alunos.service";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  inscricao: Subscription = new Subscription();

  id: any;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) {
  // this.id = this.route.snapshot.params['id'];
   }
   ngOnInit(): void {
     this.inscricao = this.route.params.subscribe(
       (params: any) => {
         this.id = params['id'];
         this.aluno = this.alunosService.getAluno(this.id);
       }
     );

     if(this.aluno === null) this.router.navigate(['naoEncontrado', this.id]);
   }
   ngOnDestroy(){
     this.inscricao.unsubscribe();
   }

   editar(nome: string, email: string){
     this.aluno['nome'] = nome;
     this.aluno['email'] = email;
     this.router.navigate(['alunos', this.id]);
   }
}
